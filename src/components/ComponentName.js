import React from "react"
import { StaticQuery, graphql } from "gatsby"

const ComponentName = () => (
    <StaticQuery
        query={graphql`
            {
                allFile(filter: { relativeDirectory: { eq: "work" } }) {
                    edges {
                        node {
                            id
                            childImageSharp {
                                fluid {
                                    src
                                    srcSet
                                    srcSetWebp
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => <pre>{JSON.stringify(data, null, 4)}</pre>}
    ></StaticQuery>
)

export default ComponentName
