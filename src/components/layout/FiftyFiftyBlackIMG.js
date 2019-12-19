import React from "react"
import styled from "styled-components"
import ServiceImage from "../ServiceImage"

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
        <div>
            <ContentContainer>
                <Square></Square>
                <h2>
                    Build & <br />
                    Deliver
                </h2>
                <hr />
                <p>
                    Neben der strategischen Platzierung und Konzeption Ihrer Produkte und Services, entwickeln und gestalten wir jeden möglichen State. 
                </p>
            </ContentContainer>
            <ServiceImage />
        </div>
    </StyledSection>
)
export default div
