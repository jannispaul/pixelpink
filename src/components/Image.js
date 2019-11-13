import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                placeholderImage: file(
                    relativePath: { eq: "aboutUs/ueberuns.jpg" }
                ) {
                    childImageSharp {
                        fluid(maxWidth: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => (
            <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        )}
    />
)
export default Image
