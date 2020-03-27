import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledIMG = styled(Img)`
    height: 40%;

`

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                serviceimage: file(
                    relativePath: { eq: "services/pixelpinkAction.jpg" }
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
            <StyledIMG alt="Felix Lebedinzew and Jannis Wicke working on design with iMac on withe desk" fluid={data.serviceimage.childImageSharp.fluid} />
        )}
    />
)
export default Image
