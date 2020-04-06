import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledIMG = styled(Img)`
    height: 80%;

    @media (min-width: 1041px) {
        max-height: 70vh;
    }

`

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                serviceimage: file(
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
            <StyledIMG alt="Felix Lebedinzew, Managing Director Design and Jannis Wicke, Managing Director Technology PixelPink" fluid={data.serviceimage.childImageSharp.fluid} />
        )}
    />
)
export default Image
