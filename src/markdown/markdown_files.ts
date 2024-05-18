import remarkProcessor from "./remark_processor";
import matter from "gray-matter";

export interface MarkdownFrontMatter {
    title: string;
    date: string | undefined;
}

export interface MarkdownFile {
    frontMatter: MarkdownFrontMatter,
    element: React.ReactElement
}

export type FetchFileFn = () => Promise<MarkdownFile>;

export class MarkdownFolder {
    private readonly path: string;
    private readonly subfolders: MarkdownFolder[];
    private readonly files: Record<string, FetchFileFn>;

    constructor(path: string) {
        this.path = path;
        this.subfolders = [];
        this.files = {};
    }

    addFile(filePath: string, fetchFileFn: FetchFileFn) {
        if (filePath.substring(0, this.path.length + 1) !== `${this.path}/`) {
            return;  // File is not in this folder. Ignore it.
        }

        const subpath = filePath.substring(this.path.length + 1);
        const slashIndex = subpath.indexOf("/");

        if (slashIndex === -1) {
            this.files[subpath] = fetchFileFn;
        } else {
            const subfolderName = subpath.substring(0, slashIndex);
            const subfolder = this.subfolders.find((f) => f.path === subfolderName);

            if (subfolder) {
                subfolder.addFile(subpath, fetchFileFn);
            } else {
                const newSubfolder = new MarkdownFolder(subfolderName);
                newSubfolder.addFile(subpath, fetchFileFn);
                this.subfolders.push(newSubfolder);
            }
        }
    }

    async fetchFile(filePath: string): Promise<MarkdownFile | undefined> {
        if (filePath.substring(0, this.path.length + 1) !== `${this.path}/`) {
            return undefined;  // File is not in this folder.
        }

        const subpath = filePath.substring(this.path.length + 1);
        const slashIndex = subpath.indexOf("/");

        if (slashIndex === -1) {
            const fetchFileFn = this.files[subpath];
            return fetchFileFn ? fetchFileFn() : undefined;
        } else {
            const subfolderName = subpath.substring(0, slashIndex);
            const subfolder = this.subfolders.find((f) => f.path === subfolderName);

            return subfolder?.fetchFile(subpath);
        }
    }
}

const createFetchFileFn = (importFn: () => Promise<{default: string}>): FetchFileFn => {
    let fetchResult: MarkdownFile | undefined = undefined;

    return async () => {
        if (fetchResult) {
            return fetchResult;
        }

        const path = await importFn().then(res => res.default);

        const rawMarkdown = await fetch(path).then(res => res.text());

        const { data, content } = matter(rawMarkdown);

        const markdownEl = await remarkProcessor.process(content)
            .then(res => res.result);

        const slug = path.substring(path.lastIndexOf("/") + 1, path.lastIndexOf(".md"));

        fetchResult = {
            frontMatter: {
                title: data.title ?? slug,
                date: data.date
            },
            element: markdownEl
        };

        return fetchResult;
    }
};

const loadContentFiles = (): MarkdownFolder => {
    const filePaths = import.meta.glob("/content/**/*.md");

    const folder = new MarkdownFolder("/content");

    for (const filePath in filePaths) {
        folder.addFile(filePath, createFetchFileFn(filePaths[filePath] as any));
    }

    return folder;
}

export const markdownFiles = loadContentFiles();

export default markdownFiles;
