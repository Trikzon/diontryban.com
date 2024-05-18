import { Element, Node, Parent, Text } from "hast";
import { visit } from "unist-util-visit";
import "./rehype_code_header.module.scss"

const onCodeCopyClick = (code: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    const button = event.currentTarget;

    navigator.clipboard.writeText(code).then(() => {
        button.classList.add("clicked");

        setTimeout(() => {
            button.classList.remove("clicked");
        }, 2000);
    });
};

const rehypeCodeHeader = () => (tree: Node) => {
    visit(tree, "element", (node: Node, index: number | null, parent: Node | null) => {
        const nodeEl = node as Element;
        if (nodeEl.type !== "element") {
            return;
        }

        if (nodeEl.tagName !== "pre" || !nodeEl.children || nodeEl.children[0].type !== "element") {
            return;
        }

        const parentEl = parent as Parent;
        if (!parentEl || !Array.isArray(parentEl.children) || index === null || index === 0) {
            return;
        }

        const codeEl = nodeEl.children[0] as Element;
        if (codeEl.tagName !== "code") {
            return;
        }

        if (!Array.isArray(codeEl.properties?.className)) {
            return;
        }

        const className = codeEl.properties.className;
        const langClass = className.find((cssClass: string | number) => {
            return typeof cssClass === "string" && cssClass.startsWith("language-");
        });

        if (!langClass || typeof langClass !== "string") {
            return;
        }

        const lang = langClass.substring("language-".length);

        parentEl.children.splice(index, 0, {
            type: "element",
            tagName: "div",
            properties: { className: ["code-header"] },
            children: [
                {
                    type: "element",
                    tagName: "div",
                    properties: { className: ["code-lang"] },
                    children: [{ type: "text", value: lang }]
                },
                {
                    type: "element",
                    tagName: "button",
                    properties: {
                        className: ["code-copy"],
                        title: "Copy code to clipboard",
                        onClick: onCodeCopyClick(codeEl.children.map((c) => (c as Text)?.value).join("\n"))
                    },
                    children: [
                        {
                            type: "element",
                            tagName: "svg",
                            properties: {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 448 512",
                            },
                            children: [
                                {
                                    type: "element",
                                    tagName: "path",
                                    properties: {
                                        fill: "currentColor",
                                        d: "M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"
                                    },
                                    children: []
                                }
                            ]
                        }
                    ]
                }
            ]
        } as Element);
    }, true);
}

export default rehypeCodeHeader;
