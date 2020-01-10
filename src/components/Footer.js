import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logoWhite from "../../content/logos/logoWhite.svg"
// import Icon from "./layout/Icon"
// import { ICONS } from "../theme/Icons"

const StyledFooter = styled.div`
    background-color: var(--color-black);
    padding: calc(var(--padding-vertical)) var(--padding-side);
    padding-bottom: 6em;
    
    a:hover, a:focus, a:active {
        color: var(--color-primary);
        -webkit-transition-duration: 0.2s;
        transition-duration: 0.2s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }

    @media (min-width: 769px) {
        padding: calc(var(--padding-vertical) / 2) var(--padding-side)
            calc(var(--padding-vertical) / 9) var(--padding-side);
        grid-column: 2;
    }
    
    @media (min-width: 1441px) {
    }
`

const StyledGrid = styled.div`
    margin-bottom: 60px;
    max-width: 1168px;
    color: var(--color-white);
    margin: auto;
    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin-bottom: 0;
    }
    @media (min-width: 1441px) {
    }
`

const Address = styled.div`
    & > img {
        display: block;
        margin-bottom: 1rem;
    }
    & > p {
        color: var(--color-gray-medium);
        & > a {
            text-decoration: none;
        }
    }

    margin-bottom: 2rem;
    @media (min-width: 769px) {
        order: 1;
    }
    @media (min-width: 1441px) {
    }
`

const SocialMedia = styled.div`
    font-size: 12px;
    font-weight: 700;
    color: var(--color-white);
    letter-spacing: 2.29px;
    text-transform: uppercase;
    text-decoration: none;
    margin-bottom: 2rem;

    & > a {
        display: block;
        text-decoration: none;
        margin-bottom: 1rem;
    }

    &>svg {
        fill: #656D78;
        width: 32px;
        height: 32px;
        margin-right: 16px;
        margin-left: -12px;

    }
    

    @media (min-width: 769px) {
        order: 3;
        & > a {
            display: inline-block;
            :not(:last-of-type) {
                margin-right: 1rem;
            }
        }
        @media (min-width: 1441px) {
        }
    }
`

const LegalContent = styled.div`
    color: var(--color-gray-dark);
    letter-spacing: 1.09px;
    line-height: 21px;
    margin-bottom: 2rem;

    @media (min-width: 769px) {
        text-align: right;
        order: 2;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    @media (min-width: 1441px) {
    }
`

const LegalLinks = styled.div`
    color: var(--color-gray-dark);
    letter-spacing: 1.09px;

    & > a {
        display: block;
        text-decoration: none;
        margin-bottom: 1rem;
    }

    

    @media (min-width: 769px) {
        order: 4;
        display: flex;
        justify-content: flex-end;
        & > a {
            display: inline-block;
            :not(:last-of-type) {
                margin-right: 1rem;
            }
        }
    }
    @media (min-width: 1441px) {
    }
`

const Footer = props => (
    <StyledFooter>
        <StyledGrid>
            <Address>
                <img src={logoWhite} alt="Logo von PixelPink" />
                <p>
                    Felix Lebedinzew & Jannis Wicke
                    <br />
                    <a href="mailto:hello@pixel-pink.de?subject=Hey PixelPink!👋🏼&body=Hallo Felix und Jannis,">
                        hello@pixel-pink.de
                    </a>
                    <br />
                    <a href="tel: +4917681410001">+49 176 81 41 0001</a>
                    <br />
                </p>
            </Address>

            <SocialMedia>
                <a
                    href="https://www.instagram.com/pixelpink.berlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                <a
                    href="http://facebook.com/pixelpinkberlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Facebook
                </a>
                <a
                    href="https://www.behance.net/pixelpinkberlin"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Behance
                </a>
                <a
                    href="http://facebook.com/pixelpinkberlin/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
            </SocialMedia>

            <LegalContent>
                <p>
                    © 2020 PixelPink GbR <br />
                    All Rights Reserved
                </p>
            </LegalContent>

            <LegalLinks>
                <Link to="/impressum">Impressum</Link>
                <Link to="/datenschutz">Datenschutz</Link>
                <Link to="/agb">AGB</Link>
            </LegalLinks>
        </StyledGrid>
    </StyledFooter>
)
export default Footer
