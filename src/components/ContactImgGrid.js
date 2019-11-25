import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledIMG = styled(Img)`
    margin: 0 calc(-1 * var(--padding-side));

    @media (min-width: 769px) {
        width: 50vw;
        margin-left: 0;
        margin-right: calc(50vw - 1168px);
        margin-top: calc(-1 * var(--padding-vertical));
        margin-bottom: calc(-1 * var(--padding-vertical));
    }
    @media (min-width: 1441px) {
        /* Taking sidebar width into account */
        width: calc(50vw - 150px);
    }
`

const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                serviceimage: file(
                    relativePath: { eq: "/contact" }
                ) {
                    childImageSharp {
                        fixed(width: 1168, quality: 100) {
                            ...GatsbyImageSharpFixed_withWebp
                        }
                    }
                }
            }
        `}
        render={data => (
            <StyledIMG fixed={data.serviceimage.childImageSharp.fixed} />
        )}
    />
)
export default Image


const ContactImgGrid = () => (
    <div>
        <Img fixed="" alt=""/>
        <Img fixed="" alt=""/>
        <Img fixed="" alt=""/>
    </div>
)

export default ContactImgGrid
