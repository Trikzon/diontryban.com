import { graphql } from "gatsby";
import React from "react"
    
export default function Page({ data }) {
    const { html } = data.file.childMarkdownRemark;
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
    )
}

export const query = graphql`
    query MyQuery($name: String) {
        file(name: {eq: $name}) {
            childMarkdownRemark {
                html
            }
        }
    }
`
