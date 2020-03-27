import React from "react"
import styled from "styled-components"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const HeadlineContainer = styled.div`
    max-width: 1168px;
    margin: auto;
    margin-bottom: 100px;
    & > h2 {
        color: var(--color-white);
        & > span {
            color: var(--color-gray-medium);
        }
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
    }
`

const StyledContainer = styled.div`
    max-width: 1168px;
    margin: auto;
    width: 100%;
    max-width: 100%;
    background: #1a1a1a;
    color: white;
    font-size: 18px;
    letter-spacing: 0.39px;
    line-height: 32px;
    padding-bottom: 100px;
    padding-top: 100px;

    /* Added stuff */
    padding: var(--padding-vertical) var(--padding-side) 0;
    @media (min-width: 769px) {
        padding: var(--padding-vertical) var(--padding-side);
    }
`
const ScrollContainer = styled.div`
    margin: 0 calc(-1 * var(--padding-side));
    max-width: calc(100% + 2 * var(--padding-side));

    @media (min-width: 1168px) {
        margin: 0;
    }
    & > div {
        display: grid;
        grid-template-columns: repeat(4, 70vw) 2vw;
        grid-gap: 20px;
        overflow-x: scroll;
        scroll-padding: 0 10%;
        scroll-snap-type: x mandatory;
        padding: 0 var(--padding-side);
        @media (min-width: 500px) {
            grid-template-columns: repeat(4, 40vw) 2vw;
        }
        @media (min-width: 954px) {
            grid-template-columns: repeat(4, 1fr);
            max-width: 1168px;
            margin: auto;
        }
        @media (min-width: 1168px) {
            padding: 0;
        }
    }
`

const ServiceColumn = styled.div`
    display: inline-block;
    scroll-snap-align: start;
    & svg {
        fill: var(--color-primary);
        height: 40px;
        width: auto;
        margin-bottom: 10px;
    }
    & > ul {
        padding: 20px;
        list-style: none;
        background: #190d11;
        border: 1px solid;
        border-image: conic-gradient(
                rgba(51, 235, 252, 0.5),
                rgba(255, 225, 76, 0.5),
                rgba(249, 108, 31, 0.5),
                rgba(247, 23, 102, 0.5),
                rgba(51, 235, 252, 0.5)
            )
            1;
        box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.5);
    }
`
const StyledIcon = styled(Icon)`
    svg {
        fill: var(--color-pimary);
    }
`

class ServicesTable extends React.Component {
    render() {
        const CONTENT = [
            {
                name: "Konzeption",
                icon: ICONS.TRIANGLE,
                services: ["Analyse", "Konzept", "Beratung", "Digitalisierung"],
            },
            {
                name: "Design",
                icon: ICONS.SQUARE,
                services: [
                    "UX-Design",
                    "Customer Journey",
                    "Wireframing",
                    "UI-Design",
                ],
            },
            {
                name: "Entwicklung",
                icon: ICONS.CIRCLE,
                services: [
                    "Webflow",
                    "Responsive Design",
                    "Gatsby / React",
                    "Headless-CMS",
                    "Wordpress",
                    "Shopify",
                    // "Sapper / Svelte",
                    // "Contentful",
                    // "Netlify-CMS",
                ],
            },
            {
                name: "Marketing",
                icon: ICONS.HEXAGONE,
                services: [
                    "Search Engine Optimization",
                    "Search Engine Marketing",
                    "Social Media Marketing",
                    "Intercomm",
                ],
            },
        ]
        return (
            <StyledContainer>
                <HeadlineContainer>
                    <h2>
                        Unsere Services
                        <br />
                        <span>keine Massenware, nur originelles Design</span>
                    </h2>
                    <hr />
                </HeadlineContainer>
                <ScrollContainer>
                    <div>
                        {CONTENT.map((category, i) => (
                            <ServiceColumn key={i}>
                                <StyledIcon icon={category.icon} />

                                <h2>{category.name}</h2>
                                <ul>
                                    {category.services.map((service, i) => (
                                        <li key="i">{service}</li>
                                    ))}
                                </ul>
                            </ServiceColumn>
                        ))}
                        <div></div>
                    </div>
                </ScrollContainer>
            </StyledContainer>
        )
    }
}

export default ServicesTable
