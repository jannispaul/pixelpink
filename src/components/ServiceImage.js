import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledIMG = styled(Img)`
    ${'' /* width: calc(50vw - 150px);
    position: relative;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw; */}
`



const Image = () => (
    <StaticQuery
        query={graphql`
            query {
                serviceimage: file(relativePath: { eq: "services/pixelpinkAction.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <StyledIMG fluid={data.serviceimage.childImageSharp.fluid} />}
    />
)
export default Image
