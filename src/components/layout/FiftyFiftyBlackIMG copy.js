import React from "react"
import styled from "styled-components"
import ServiceImage from "../ServiceImage"

const StyledSection = styled.div`
    width: 100%;
    background: var(--color-black);
    color: var(--color-white);
    padding: var(--padding-vertical) var(--padding-side);
    @media (min-width: 769px) {
        padding: 0;
        display: grid;
        grid-template-columns: var(--padding-side) 1fr 100px 1fr var(
                --padding-side
            );
        grid-template-columns: 1fr 534px 100px 534px 1fr;
    }
    /* grid-template-columns: 1fr 1fr 1fr 1fr; */
    & > div {
        max-width: 1168px;
        margin: auto;
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
    ${"" /* padding: var(--padding-vertical) var(--padding-side); */}
    @media (min-width: 769px) {
        grid-column: 2;
    }
    display: block;
    position: relative;
    float: left;
`

const div = props => (
    <StyledSection>
        <ContentContainer>
            <Square></Square>
            <h2>
                Build <br />
                Deliver
            </h2>
            <hr />
            <p>
                Das Auge isst mit! Neben der Service-Einordnung und der
                Konzeption ist Branding und charmantes Design das
                ausschlaggebende Argument für Deine Marke oder Produkt. Wir
                treiben Dein Kommunikationskonzept voran und entwicklen visuell
                ästhetische Designs.
            </p>
        </ContentContainer>
        <ServiceImage />
    </StyledSection>
)
export default div
