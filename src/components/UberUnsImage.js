import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                aboutusimage: file(relativePath: { eq: "aboutUs/ueberuns.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 2000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Img fluid={data.aboutusimage.childImageSharp.fluid} />}
    />
)
export default Image
