import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/Button"
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
    ${'' /* max-width: 1168px; */}
    margin: auto;
    min-height: 34vh;
    max-height: 100vh;
`

const TextContainer = styled.div`
    padding: 24px var(--padding-side);
    margin: auto;
    margin-bottom: 92px;
    max-width: 1168px;
    @media (min-width: 1216px) {
        padding: 24px 0;
    }
    /* margin: 24px var(--padding-side); */
`

/*Company Tag*/
const Company = styled.span`
    font-weight: 600;
    color: var(--color-gray-dark);
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: 2px;
    text-transform: uppercase;
`

const SingleProject = props => (
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
        <TextContainer>
            <Company>{props.company}</Company>
            <h2>{props.title}</h2>
            <Button link={props.link} target="_blank">Zeig mir mehr</Button>
        </TextContainer>
    </Project>
)
export default SingleProject

export const query = graphql`
    fragment ProjectImagesFragment on File {
        id
        childImageSharp {
            fluid(quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`
// export default props => (
//     <StaticQuery
//         query={graphql`
//             query {
//                 imageOne: file(relativePath: { eq: "qvstaHeader.jpg" }) {
//                     childImageSharp {
//                         fluid(maxWidth: 1000) {
//                             ...GatsbyImageSharpFluid_withWebp
//                         }
//                     }
//                 }
//             }
//         `}
//         render={data => <SingleProject data={data} {...props} />}
//     />
// )

