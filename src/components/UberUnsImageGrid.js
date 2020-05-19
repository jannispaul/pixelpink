import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carousel.css"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledSection = styled.div``
const ImageGrid = styled.div`
    max-width: 1168px;
    margin: auto;
    & > div:not(:first-of-type) {
        display: none;
    }
    @media (min-width: 834px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 364px 364px;
        grid-gap: 20px;
        margin-bottom: var(--padding-vertical);

        & > div:not(:first-of-type) {
            display: inline-block;
        }
        & > div:first-of-type {
            grid-row: 1/3;
        }
    }
`

class HeroProject extends React.Component {
    constructor(props) {
        super(props)
        this.images = [
            {
                image: this.props.data.ueberUns.edges[0].node.childImageSharp
                    .fluid,
                imgAltText:
                    "Felix Lebedinzew and Jannis Wicke working in office environment looking at screen",
            },
            {
                image: this.props.data.ueberUns.edges[1].node.childImageSharp
                    .fluid,
                imgAltText:
                    "PixelPink office view with 3 apple computers and plants on white desk",
            },
            {
                image: this.props.data.ueberUns.edges[2].node.childImageSharp
                    .fluid,
                imgAltText: "art director action figure",
            },
        ]
    }

    render() {
        return (
            <StyledSection>
                <ImageGrid>
                    {this.images.map((project, i) => (
                        <Img
                            data-sal="slide-up"
                            data-sal-delay="0"
                            data-sal-easing="ease-out"
                            fluid={project.image}
                            alt={project.imgAltText}
                            key={i}
                        />
                    ))}
                </ImageGrid>
            </StyledSection>
        )
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                ueberUns: allFile(
                    filter: { relativeDirectory: { eq: "contact" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }
            }
        `}
        render={(data) => <HeroProject data={data} {...props} />}
    />
)
