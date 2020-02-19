import React from "react"
import styled from "styled-components"
import boschLogo from "../../content/logos/boschLogo.svg"
import commerzbankLogo from "../../content/logos/commerzbankLogo.svg"
import fuelcastLogo from "../../content/logos/fuelcastLogo.svg"
import lhhLogo from "../../content/logos/lhhLogo.svg"
import mediapioneerLogo from "../../content/logos/mediapioneerLogo.svg"
import telekomLogo from "../../content/logos/telekomLogo.svg"
import logo from "../../content/logos/logo.svg"

const StyledSection = styled.section`
    background: var(--color-gray-light);
    padding: var(--padding-vertical) var(--padding-side);

    & > div,
    h2 {
        max-width: 1168px;
        margin: auto;
        color: var(--color-black);
        margin-bottom: var(--space-l);
        /* padding: 0 var(--padding-side); */
    }

    & > h2 > img {
        width: 100px;
        @media (min-width: 834px) {
            width: 140px;
        }
    }
`

const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 110px);
    align-items: center;
    justify-content: center;

    & > img {
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
        <h2 data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease">
            <img src={logo} alt="Logo von Fuelcast" /> {props.mainline} <br />
        </h2>
        <StyledGrid>
            <img
                src={fuelcastLogo}
                alt="Logo von Fuelcast"
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease"
            />
            <img
                src={commerzbankLogo}
                alt="Logo von Commerzbank"
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease"
            />
            <img
                src={telekomLogo}
                alt="Logo von Telekom"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease"
            />
            <img
                src={mediapioneerLogo}
                alt="Logo von Mediapioneer"
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-easing="ease"
            />
            <img
                src={boschLogo}
                alt="Logo von Bosch"
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
            />
            <img
                src={lhhLogo}
                alt="Logo von Lee Hecht Harrison"
                data-sal="slide-up"
                data-sal-delay="250"
                data-sal-easing="ease"
            />
        </StyledGrid>
    </StyledSection>
)

export default LogoWall
