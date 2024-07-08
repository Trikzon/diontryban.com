import { allContents } from "content-collections";
import Markdown from "@/app/ui/Markdown"
import styles from "@/app/not-found.module.scss";

export default function NotFound() {
    const page = allContents.find((c) => c._meta.path === "not-found");

    if (!page) {
        return <p>404 - Not Found</p>;
    }

    return (
        <div>
            <h1 className={styles.notFound}>404 - Not Found</h1>
            <Markdown html={page.html} />
        </div>
    );
}
