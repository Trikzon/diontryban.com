module.exports = {
    plugins: [
        "gatsby-transformer-remark",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "markdown",
                path: `${__dirname}/markdown/`
            }
        }
    ],
}
