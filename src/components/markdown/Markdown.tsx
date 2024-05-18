import * as React from "react";
import markdownProcessor from "./markdown_processor";

export interface MarkdownProps {
    folder: string | undefined;
    slug: string;
}

const Markdown = ({folder, slug}: MarkdownProps) => {
    const [markdownEl, setMarkdownEl] = React.useState(React.createElement(React.Fragment));
    const [invalidPath, setInvalidPath] = React.useState(false);

    React.useEffect(() => {
        import(folder ? `../../../content/${folder}/${slug}.md` : `../../../content/${slug}.md`)
            .then(res => {
                fetch(res.default)
                    .then(res => res.text())
                    .then(rawMarkdown => {
                        markdownProcessor
                            .process(rawMarkdown)
                            .then(res => setMarkdownEl(res.result));
                    });
            })
            .catch((err) => {
                setInvalidPath(true);
                console.error(err);
            });
    }, [folder, slug]);

    return invalidPath ? <p>404 Not Found</p> : markdownEl;
}

export default Markdown;