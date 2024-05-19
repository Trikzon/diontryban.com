import markdownFiles, { MarkdownFile } from "@/markdown/markdown_files";
import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./MarkdownNav.module.scss";

const compareFiles = (files: Record<string, MarkdownFile>) => {
    return (a: string, b: string) => {
        const aFavorite = files[a].frontMatter.favorite;
        const bFavorite = files[b].frontMatter.favorite;

        if (aFavorite && !bFavorite) {
            return -1;
        } else if (!aFavorite && bFavorite) {
            return 1;
        }

        return files[a].frontMatter.title.localeCompare(files[b].frontMatter.title);
    };
}

interface NavLinkProps {
    filePath: string;
    markdownFile: MarkdownFile;
}

const NavLink = ({ filePath, markdownFile }: NavLinkProps) => {
    const { pathname } = useLocation();

    const [subfiles, setSubfiles] = React.useState<Record<string, MarkdownFile>>({});
    const [hasSubfiles, setHasSubfiles] = React.useState(false);

    const destination = filePath.substring("/content".length, filePath.length - ".md".length);

    React.useEffect(() => {
        const folder = markdownFiles.getSubfolder(filePath.substring(0, filePath.length - ".md".length));

        setHasSubfiles(!!folder);

        if (folder && pathname.includes(destination)) {
            folder.fetchFiles().then((files) => setSubfiles(files));
        } else {
            setSubfiles({});
        }
    }, [filePath, pathname]);

    return (
        <div className={styles.navFolder}>
            <div className={`${styles.navLink} ${pathname === destination ? styles.active : ""}`}>
                <div className={styles.marker}>
                    { hasSubfiles ? Object.keys(subfiles).length == 0 ? "▸" : "▾" : ""}
                </div>
                <Link to={destination}>
                    {markdownFile.frontMatter.title}
                </Link>
            </div>
            { Object.keys(subfiles)
                .sort(compareFiles(subfiles))
                .map((filePath) => <NavLink key={filePath} filePath={filePath} markdownFile={subfiles[filePath]}/>)
            }
        </div>
    );
}

export const MarkdownNav = () => {
    const { pathname } = useLocation();

    const [rootFiles, setRootFiles] = React.useState<Record<string, MarkdownFile>>({});

    React.useEffect(() => {
        markdownFiles.fetchFiles().then((files) => setRootFiles(files));
    }, [pathname]);

    return (
        <nav className={styles.markdownNav}>
            { Object.keys(rootFiles)
                .sort(compareFiles(rootFiles))
                .map((filePath) => <NavLink key={filePath} filePath={filePath} markdownFile={rootFiles[filePath]}/>)
            }
        </nav>
    );
}

export default MarkdownNav;
