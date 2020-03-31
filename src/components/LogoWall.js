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

    p {
        color: var(--color-gray-dark);
        margin-bottom: var(--space-l);
        max-width: 850px;
    }
    h2 {
        max-width: 850px;
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: 1px solid var(--color-gray-medium);
    }

    & > div {
        max-width: 1168px;
        margin: auto;
        color: var(--color-black);

        & > span {
            color: var(--color-gray-medium);
        }
    }

    h2 > img {
        width: 100px;
        @media (min-width: 834px) {
            width: 130px;
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
        -webkit-filter: grayscale(100%) opacity(70%); /* Safari 6.0 - 9.0 */
        filter: grayscale(100%) opacity(70%);
        -webkit-transition: filter 0.1s ease-in;
        -moz-transition: filter 0.1s ease-in;
        -o-transition: filter 0.1s ease-in;
        -ms-transition: filter 0.1s ease-in;
        transition: filter 0.1s ease-in;
    }

    & > img:hover {
        -webkit-filter: grayscale(0%) opacity(100%); /* Safari 6.0 - 9.0 */
        filter: grayscale(0%) opacity(100%);
        -webkit-transition: filter 0.1s ease-in;
        -moz-transition: filter 0.1s ease-in;
        -o-transition: filter 0.1s ease-in;
        -ms-transition: filter 0.1s ease-in;
        transition: filter 0.1s ease-in;
    }
    @media (min-width: 769px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 110px);
    }
`

const LogoWall = props => (
    <StyledSection>
        <div>
            <h2 data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease">
                <img src={logo} alt="PixelPink-Logo" /> ist ein auf Design und
                Technologie spezialisiertes Studio für digitale Medien in
                Berlin.
            </h2>
            <hr />
            <p data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease">
                Wir arbeiten mit Unternehmen, Start-Ups, in Agenturen und
                kreieren Landingpages, Corporate und E-Commerce-Websites,
                Appdesigns und Marketing-Kampagnen. Unsere Stärken liegen in den
                Bereichen Konzept, Design, Entwicklung und digitales Marketing.
                Von der ersten Anfrage bis über den Launch hinaus stehen wir
                unseren Kunden beratend und auf Augenhöhe zur Seite.
            </p>
        </div>
        <StyledGrid>
            <img
                src={fuelcastLogo}
                alt="Logo von Fuelcast"
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease"
            />
            <img
                src={commerzbankLogo}
                alt="Logo von Commerzbank"
                data-sal="slide-up"
                data-sal-delay="100"
                data-sal-easing="ease"
            />
            <img
                src={telekomLogo}
                alt="Logo von Telekom"
                data-sal="slide-up"
                data-sal-delay="150"
                data-sal-easing="ease"
            />
            <img
                src={mediapioneerLogo}
                alt="Logo von Mediapioneer"
                data-sal="slide-up"
                data-sal-delay="200"
                data-sal-easing="ease"
            />
            <img
                src={boschLogo}
                alt="Logo von Bosch"
                data-sal="slide-up"
                data-sal-delay="250"
                data-sal-easing="ease"
            />
            <img
                src={lhhLogo}
                alt="Logo von Lee Hecht Harrison"
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
            />
        </StyledGrid>
    </StyledSection>
)

export default LogoWall
