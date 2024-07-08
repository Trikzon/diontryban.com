import { allContents } from "content-collections";
import { notFound } from "next/navigation";
import Markdown from "@/app/ui/Markdown"

export default function Test() {
    const page = allContents.find((c) => c._meta.path === "test");

    if (!page) {
        return notFound();
    }

    return (
        <>
            <h1>{page.title}</h1>
            <Markdown html={allContents.find((c) => c._meta.path === "test")!.html} />
        </>
    );
}
