import rehypeKatex from "rehype-katex";
import rehypeShiki from "@shikijs/rehype";
import remarkAlerts from "remark-alerts";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import { Context, defineCollection, defineConfig, Document, Meta } from "@content-collections/core";
import { compileMarkdown } from "@content-collections/markdown";

const compileCustomMarkdown = async (context: Pick<Context, "cache">, document: { _meta: Meta; content: string; }) => {
    return await compileMarkdown(context, document, {
        allowDangerousHtml: true,
        remarkPlugins: [
            remarkGfm,
            remarkMath,
            [remarkAlerts, { markers: "*" }],
        ],
        rehypePlugins: [
            rehypeKatex,
            [rehypeShiki, { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" }}]
        ],
    });
};

const content = defineCollection({
    name: "content",
    directory: "content",
    include: "*.md",
    schema: (z) => ({
        title: z.string(),
    }),
    transform: async (document, context) => {
        const html = await compileCustomMarkdown(context, document);
        return {
            ...document,
            html,
        };
    },
});

const blogs = defineCollection({
    name: "blogs",
    directory: "content/blogs",
    include: "*.md",
    schema: (z) => ({
        title: z.string(),
        slug: z.string(),
        publishDate: z.string().date().optional(),
    }),
    transform: async (document, context) => {
        const html = await compileCustomMarkdown(context, document);
        return {
            ...document,
            html,
        };
    },
});

const projects = defineCollection({
    name: "projects",
    directory: "content/projects",
    include: "*.md",
    schema: (z) => ({
        title: z.string(),
    }),
    transform: async (document, context) => {
        const html = await compileCustomMarkdown(context, document);
        return {
            ...document,
            html,
        };
    },
});

export default defineConfig({
    collections: [content, blogs, projects],
});
