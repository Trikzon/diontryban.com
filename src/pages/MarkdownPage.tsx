import { useParams } from "react-router-dom";
import Markdown from "@/components/markdown/Markdown";
import styles from "./MarkdownPage.module.scss";

const MarkdownPage = () => {
    const { folder, slug } = useParams();

    return (
        <>
            <main className={styles.mainContent}>
                { slug && <Markdown folder={folder?.toLowerCase()} slug={slug.toLowerCase()} /> }
            </main>
        </>
    );
}

export default MarkdownPage;