import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledIMG = styled(Img)`
    margin: 0 calc(-1 * var(--padding-side));

    @media (min-width: 769px) {
        width: 50vw;
        margin-right: 0;
        ${'' /* margin-left: calc(584px - 50vw); */}
        margin-top: calc(-1 * var(--padding-vertical));
        margin-bottom: calc(-1 * var(--padding-vertical));
    }
    @media (min-width: 1230px) {
        margin-left: calc(584px - 50vw);
    }
    @media (min-width: 1441px) {
        /* Taking sidebar width into account */
        width: calc(50vw - 150px);
        margin-left: calc(584px - 50vw);
    }
`

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                serviceimage: file(
                    relativePath: { eq: "aboutUs/workingHands.jpg" }
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
            <StyledIMG fluid={data.serviceimage.childImageSharp.fluid} />
        )}
    />
)
export default Image
