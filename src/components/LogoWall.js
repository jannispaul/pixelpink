import React from "react"
import styled from "styled-components"
import StyledLink from "../components/StyledLink"
// import { Link } from "gatsby"
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
    grid-gap: 20px;

    @media (min-width: 769px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(2, 110px);
    }

    & > div {
        background: #fff;
        box-shadow: 9px 10px 67px -17px rgba(51, 51, 51, 0.2);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        border-radius: 8px;
    }
    & > div {
        & > img {
            margin: auto;
            max-width: 70%;
            max-height: 40px;
            /* filter: grayscale(100%) opacity(70%); */
            transition: filter 0.1s ease-in;
        }
        &:hover img {
            -webkit-filter: grayscale(0%) opacity(100%); /* Safari 6.0 - 9.0 */
            filter: grayscale(0%) opacity(100%);
            -webkit-transition: filter 0.1s ease-in;
            -moz-transition: filter 0.1s ease-in;
            -o-transition: filter 0.1s ease-in;
            -ms-transition: filter 0.1s ease-in;
            transition: filter 0.1s ease-in;
        }
    }
`

const LogoWall = (props) => (
    <StyledSection>
        <div>
            <h2
                data-sal="slide-up"
                data-sal-delay="0"
                data-sal-easing="ease-out"
            >
                <img src={logo} alt="PixelPink-Logo" /> {props.headline}
            </h2>
            <hr />
            <p
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                {props.copy}
                <br />
                <br />
                <StyledLink to="/ueber-uns">{props.link}</StyledLink>
            </p>
        </div>
        <StyledGrid>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={fuelcastLogo} alt="Logo von Fuelcast" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={commerzbankLogo} alt="Logo von Commerzbank" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={telekomLogo} alt="Logo von Telekom" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={mediapioneerLogo} alt="Logo von Mediapioneer" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={boschLogo} alt="Logo von Bosch" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={lhhLogo} alt="Logo von Lee Hecht Harrison" />
            </div>
        </StyledGrid>
    </StyledSection>
)

export default LogoWall
