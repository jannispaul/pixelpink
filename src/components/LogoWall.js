import React from "react"
import styled from "styled-components"
import StyledLink from "../components/StyledLink"
import boschLogo from "../../content/logos/bosch-logo.svg"
import commerzbankLogo from "../../content/logos/commerzbank-logo.svg"
import lhhLogo from "../../content/logos/LHH-logo.svg"
import mediapioneerLogo from "../../content/logos/thepioneer-logo.svg"
import telekomLogo from "../../content/logos/telekom-logo.svg"
import adobeLogo from "../../content/logos/adobe-logo.svg"
import axelSpringerAudioLogo from "../../content/logos/axel-springer-audio-logo.svg"
import ysRealEstateLogo from "../../content/logos/ys-real-estate-logo.svg"
import raulLogo from "../../content/logos/raul-krauthausen-logo.png"
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
    grid-template-rows: repeat(4, 100px);
    align-items: center;
    justify-content: center;
    grid-gap: 20px;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        &:last-of-type {
            display: none;
        }
    }
    & > div {
        & > img {
            margin: auto;
            max-width: 60%;
            max-height: 60px;
        }
    }

    @media (min-width: 769px) {
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 110px);
        & > div {
            &:last-of-type {
                display: flex;
            }
            & > img {
                margin: auto;
                max-width: 50%;
                max-height: 70px;
            }
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
                <StyledLink to={props.link}>{props.linkText}</StyledLink>
            </p>
        </div>
        <StyledGrid>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={adobeLogo} alt="Logo von Adobe" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={commerzbankLogo} alt="Logo der Commerzbank" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={telekomLogo} alt="Logo der Telekom" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={mediapioneerLogo} alt="Logo von ThePioneer" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={lhhLogo} alt="Logo von Lee Hecht Harrison" />
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
                <img src={ysRealEstateLogo} alt="Logo von YS Real Estate" />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img
                    src={axelSpringerAudioLogo}
                    alt="Logo von Axel Springer Audio"
                />
            </div>
            <div
                data-sal="slide-up"
                data-sal-delay="50"
                data-sal-easing="ease-out"
            >
                <img src={raulLogo} alt="Logo von Raul Krauthausen" />
            </div>
        </StyledGrid>
    </StyledSection>
)

export default LogoWall
