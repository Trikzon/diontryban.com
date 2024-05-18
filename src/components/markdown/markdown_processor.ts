import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeCodeHeader from "./rehype_code_header";
import rehypeShiki from "@shikijs/rehype";
import rehypeReact from "rehype-react";
import * as jsxRuntime from "react/jsx-runtime";
import "./markdown_processor.module.scss";

const markdownProcessor = unified()
    .use(remarkParse)
    .use(remarkBreaks)
    .use(remarkGfm)
    .use(remarkMath)
    // allowDangerousHtml is required for rehypeRaw to work
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeKatex)
    .use(rehypeCodeHeader)
    .use(rehypeShiki, { themes: { light: "catppuccin-latte", dark: "catppuccin-mocha" } })
    .use(rehypeReact, {
        Fragment: jsxRuntime.Fragment,
        jsx: jsxRuntime.jsx,
        jsxs: jsxRuntime.jsxs
    } as any);

export default markdownProcessor;
