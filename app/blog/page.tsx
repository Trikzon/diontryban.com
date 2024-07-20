import { allBlogs } from "content-collections";
import Link from "next/link";
import styles from "@/app/blog/page.module.scss";

function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

export default function Blogs() {
    let blogs = [...allBlogs].filter((b) => b.publishDate);
    blogs.sort((a, b) => b.publishDate!.localeCompare(a.publishDate!));

    return (
        <div>
            <h1>Blog</h1>
            {blogs.map((blog) => (
                <div className={styles.blog} key={blog._meta.path}>
                    <Link href={`/blog/${blog._meta.path}`}><h2>{blog.title}</h2></Link>
                    <p className={styles.date}>Published on {formatDate(blog.publishDate!)}</p>
                </div>
            ))}
        </div>
    );
}
