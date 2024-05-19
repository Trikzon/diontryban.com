import * as React from "react";
import styles from "./MarkdownPage.module.scss";
import { useLocation } from "react-router-dom";
import { MarkdownFile, markdownFiles } from "@/markdown/markdown_files";
import MarkdownNav from "@/components/MarkdownNav";

const MarkdownPage = () => {
    const { pathname } = useLocation();

    const [notFound, setNotFound] = React.useState(false);
    const [markdownFile, setMarkdownFile] = React.useState<MarkdownFile | undefined>(undefined);

    React.useEffect(() => {
        markdownFiles.fetchFile(`/content${pathname}.md`).then((file) => {
            if (file) {
                setMarkdownFile(file);
                setNotFound(false);
            } else {
                setNotFound(true);
            }
        });
    }, [pathname]);

    return (
        <div className={styles.frame}>
            <div className={`${styles.sidebar} ${styles.left}`}>
                <div className={styles.title}>Dion Tryban</div>
                {/* <input placeholder="Search" /> */}
                <MarkdownNav />
            </div>
            <div className={styles.center}>
                <div className={styles.pageTitle}>
                    { notFound
                        ? <h1>404 Not Found</h1>
                        : <h1>{markdownFile?.frontMatter.title}</h1>
                    }
                    <em>{ markdownFile?.frontMatter?.date }</em>
                </div>
                <article>
                    { markdownFile?.element }
                </article>
            </div>
        </div>
    );
}

export default MarkdownPage;