import React from "react"
import styled from "styled-components"
import boschLogo from "../../content/logos/boschLogo.svg"
import commerzbankLogo from "../../content/logos/commerzbankLogo.svg"
import fuelcastLogo from "../../content/logos/fuelcastLogo.svg"
import lhhLogo from "../../content/logos/lhhLogo.svg"
import mediapioneerLogo from "../../content/logos/mediapioneerLogo.svg"
import telekomLogo from "../../content/logos/telekomLogo.svg"


const StyledSection = styled.section`
    background: var(--color-gray-light);
    padding: var(--padding-vertical) var(--padding-side);

    & > div, h2 {
        max-width: 1168px;
        margin: auto;
        color: var(--color-black);
        margin-bottom: var(--space-l);
        /* padding: 0 var(--padding-side); */
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 110px);
    align-items: center;
    justify-content: center;

    &>img {
        margin: auto;
        max-width: 70%;
        max-height: 40px;
    }
    @media (min-width: 769px) {
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 110px);
        }
`

const LogoWall = props => (
    <StyledSection>
        <h2>
            {" "}
            {props.mainline} <br />
        </h2>
        <StyledGrid>
            <img src={fuelcastLogo} alt="Logo von Fuelcast"/>
            <img src={commerzbankLogo} alt="Logo von Commerzbank"/>
            <img src={telekomLogo} alt="Logo von Telekom"/>
            <img src={mediapioneerLogo} alt="Logo von Mediapioneer"/>
            <img src={boschLogo} alt="Logo von Bosch"/>
            <img src={lhhLogo} alt="Logo von Lee Hecht Harrison"/>
        </StyledGrid>
    </StyledSection>
)

export default LogoWall
