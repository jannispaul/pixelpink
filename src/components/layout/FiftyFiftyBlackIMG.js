import React from "react"
import styled from "styled-components"
import ServiceImage from "../ServiceImage"
import ScrollAnchor from "../../components/ScrollAnchor"

const StyledSection = styled.div`
    width: 100%;
    background: var(--color-black);
    color: var(--color-white);
    padding: var(--padding-vertical) var(--padding-side) 0;
    overflow: hidden;
    @media (min-width: 769px) {
        padding: var(--padding-vertical) var(--padding-side);
    }
    & > div {
        max-width: 1168px;
        margin: auto;
        @media (min-width: 769px) {
            padding: 0;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-gap: 100px;
        }
    }

    p {
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }

    /* & > div {
        @media (min-width: 769px) {
grid-template-columns: 1fr 1fr;  
            display: grid;
            grid-gap: 100px;
        }
    } */
`

const Square = styled.div`
    width: 36px;
    height: 36px;
    background: var(--color-primary);
    margin-bottom: 20px;
`

const ContentContainer = styled.div`
    display: block;
    position: relative;
`

const div = props => (
    <StyledSection>
        <ScrollAnchor id="build-and-deliver"></ScrollAnchor>
        <div>
            <ContentContainer>
                <Square
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                ></Square>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="50"
                    data-sal-easing="ease-out"
                >
                    Build & <br />
                    Deliver
                </h2>
                <hr
                    data-sal="slide-up"
                    data-sal-delay="75"
                    data-sal-easing="ease-out"
                />
                <p
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease-out"
                >
                    Neben der strategischen Platzierung und Konzeption Ihrer
                    Produkte und Services, entwickeln und gestalten wir jeden
                    Ihr Projekt nach modernsten standards. Technologische
                    Exzellenz, performance und effiziente Implementierung stehen
                    für uns im Vordergrund. Unser einzigartiges Zusammenspiel
                    aus Design & Entwicklung garantiert Detailreichtum und
                    Qualität von Anfang bis zum Ende.
                </p>
            </ContentContainer>
            <ServiceImage />
        </div>
    </StyledSection>
)
export default div
