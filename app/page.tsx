import { allContents } from "content-collections";
import { notFound } from "next/navigation";
import Markdown from "@/app/ui/Markdown"

export default function App() {
    const page = allContents.find((c) => c._meta.path === "welcome");

    if (!page) {
        return notFound();
    }

    return (
        <>
            <h1>{page.title}</h1>
            <Markdown html={allContents.find((c) => c._meta.path === "welcome")!.html} />
        </>
    );
}
