import rehypeExternalLinks from "rehype-external-links";
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
            [rehypeExternalLinks, {
                // External Link icon from Font Awesome
                // https://fontawesome.com/icons/arrow-up-right-from-square?f=classic&s=solid
                content: {
                    type: "element",
                    tagName: "svg",
                    properties: {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 512 512",
                        class: "external-link-icon",
                    },
                    children: [
                        {
                            type: "element",
                            tagName: "path",
                            properties: {
                                fill: "currentColor",
                                d: "M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l82.7 0L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3l0 82.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160c0-17.7-14.3-32-32-32L320 0zM80 32C35.8 32 0 67.8 0 112L0 432c0 44.2 35.8 80 80 80l320 0c44.2 0 80-35.8 80-80l0-112c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 112c0 8.8-7.2 16-16 16L80 448c-8.8 0-16-7.2-16-16l0-320c0-8.8 7.2-16 16-16l112 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L80 32z"
                            }
                        }
                    ]
                },
                rel: []
            }],
            [rehypeShiki, { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" } }]
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
