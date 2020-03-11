import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/Button"
import StyledLink from "../components/StyledLink"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carousel.css"

const Project = styled.div`
    max-width: 1168px;
    margin: 0 auto;

    div > button {
        visibility: hidden;
    }

    div > button {
        @media (min-width: 769px) {
            visibility: visible;
        }
    }
`

const StyledImage = styled(Img)`
    ${"" /* max-width: 1168px; */}
    margin: auto;
    min-height: 34vh;
    max-height: 100vh;
`

const TextContainer = styled.div`
    padding: 24px var(--padding-side);
    margin: auto;
    margin-bottom: 92px;
    max-width: 1168px;
    h2 {
        margin-bottom: var(--space-s);
    }
    @media (min-width: 1216px) {
        padding: 24px 0;
    }
`

/*Company Tag*/
const Company = styled.span`
    display: block;
    font-weight: 600;
    color: var(--color-gray-dark);
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: 2px;
    text-transform: uppercase;
    margin-bottom: var(--space-s);
`

const SingleProject = props => (
    <Project data-sal="fade" data-sal-delay="0" data-sal-easing="ease">
        <Carousel
            autoPlay={false}
            showThumbs={false}
            showArrows={true}
            useKeyboardArrows={false}
            showStatus={false}
            emulateTouch={true}
            infiniteLoop={true}
        >
            {props.img.map((image, i) => (
                <StyledImage
                    fluid={image.node.childImageSharp.fluid}
                    alt={props.imgAltText[i]}
                    key={i}
                />
            ))}
        </Carousel>
        <TextContainer>
            <Company>{props.company}</Company>
            <h2>{props.title}</h2>
            {props.external ? (
                <Button link={props.external} target="_blank">
                    Website öffnen
                </Button>
            ) : (
                ""
            )}
            {props.internal ? (
                <StyledLink to={props.internal}>
                    Alle Projekte ansehen
                </StyledLink>
            ) : (
                ""
            )}
        </TextContainer>
    </Project>
)
export default SingleProject

export const query = graphql`
    fragment ProjectImagesFragment on File {
        id
        childImageSharp {
            fluid(quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
