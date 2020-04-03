import React from "react"
import styled from "styled-components"
import AboutUsImage from "../AboutUsImage"

const StyledSection = styled.div`
    width: 100%;
    background: var(--color-black);
    color: var(--color-white);
    overflow: hidden;
    ${'' /* padding: var(--padding-vertical) var(--padding-side) 0; */}
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
            grid-gap: 60px;
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

const ContentContainer = styled.div`
    display: block;
    position: relative;
    padding: var(--padding-vertical) var(--padding-side);
    @media (min-width: 769px) {
            padding: 0;
        }
    @media (min-width: 1440px) {
        
        }
`

const div = props => (
    <StyledSection>
        <div>
            <AboutUsImage />
            <ContentContainer>
                <h2 data-sal="slide-up" data-sal-delay="00" data-sal-easing="ease-in">
                    Design Thinking <br />
                    Approach
                </h2>
                <hr data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease-in"/>
                <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-in">
                Für uns fängt Design nicht erst auf dem Papier oder am Computer an. Wir verfolgen und leben einen ganzheitlichen Design-Approach. Wir respektieren den Mensch, die Natur und suchen stets nach neuen Herausforderungen und Problemen, um unser Leben auf dieser Erde ein bisschen besser zu gestalten. 
                </p>
            </ContentContainer>
        </div>
    </StyledSection>
)
export default div
