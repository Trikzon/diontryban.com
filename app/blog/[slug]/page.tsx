import { allBlogs } from "content-collections";
import { notFound } from "next/navigation";
import styles from "@/app/blog/[slug]/page.module.scss";
import Markdown from "@/app/ui/Markdown";

export interface BlogProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return allBlogs.map((blog) => ({
        params: { slug: blog.slug },
    }));
}

export default async function Blog({ params }: BlogProps) {
    const blog = allBlogs.find((b) => b.slug === params.slug);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <h1>{blog.title}</h1>
            <p className={styles.date}>
                {blog.publishDate ? `Published on ${blog.publishDate}` : "Unpublished"}
            </p>
            <Markdown html={blog.html} />
        </>
    );
}
