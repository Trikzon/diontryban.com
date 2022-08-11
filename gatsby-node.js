const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { data } = await graphql(`
        query GetMarkdownFileNames {
            allFile(filter: {sourceInstanceName: {eq: "markdown"}}) {
                nodes {
                    name
                }
            }
        }
    `);

    data.allFile.nodes.forEach(node => {
        actions.createPage({
            path: node.name == "index" ? "/" : node.name,
            component: path.resolve("./src/templates/page.jsx"),
            context: { name: node.name }
        });
    });
}
