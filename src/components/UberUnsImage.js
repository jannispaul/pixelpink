import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = () => (
    <StaticQuery 
        query={graphql`
            query {
                aboutusimage: file(relativePath: { eq: "aboutUs/ueberuns.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 2300, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Img alt="Felix Lebedinzew, Managing Director Design and Jannis Wicke, Managing Director Technology PixelPink" fluid={data.aboutusimage.childImageSharp.fluid} />}
    />
)
export default Image
