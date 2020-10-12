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
    padding-bottom: 60px;
    background: var(--color-white);

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
    margin-bottom: 20px;
    max-width: 1168px;
    h2 {
        margin-bottom: 15px;
    }
    @media (min-width: 1216px) {
        padding: 24px 0;
        margin-bottom: 80px;
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
const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column-reverse;
    color: var(--color-gray-dark);
    p {
        max-width: 680px;
        font-size: 18px;
        letter-spacing: 0.39px;
        line-height: 29px;
    }
    h3 {
        text-transform: uppercase;
        font-size: 14px;
        letter-spacing: 2px;
        margin-bottom: var(--space-s);
    }
    li {
        list-style: none;
        font-size: 18px;
        letter-spacing: 0.39px;
        line-height: 29px;
    }
    & > div {
        margin: 24px 0;
    }
    @media (min-width: 769px) {
        flex-direction: row;
        justify-content: space-between;
        h3 {
            margin-bottom: 20px;
        }
        & > div {
            margin: 0;
        }
    }
`

const SingleProject = (props) => (
    <Project>
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
        <TextContainer
            data-sal="slide-up"
            data-sal-delay="0"
            data-sal-easing="ease-out"
        >
            <Company>{props.company}</Company>
            <h2>{props.title}</h2>
            {props.description ? (
                <DescriptionContainer>
                    <p>{props.description}</p>
                    <div>
                        <h3>Services</h3>
                        <ul>
                            {props.services.map((service, index) => (
                                <li key={index}>{service}</li>
                            ))}
                        </ul>
                    </div>
                </DescriptionContainer>
            ) : (
                ""
            )}
            {props.external ? (
                <Button
                    link={props.external}
                    target="_blank"
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                >
                    {props.linkText}
                </Button>
            ) : (
                ""
            )}
            {props.internal ? (
                <StyledLink
                    to={props.internal}
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                >
                    {props.linkText}
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
            fluid(maxWidth: 1000, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
