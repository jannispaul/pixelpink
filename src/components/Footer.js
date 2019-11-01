import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.footer`
    grid-column: 2;
    background-color: var(--color-black);
    font-size: var(--small);
    padding: calc(var(--padding-vertical) / 2) var(--padding-side);
    color: var(--color-white);

    & > div {
        max-width: 1168px;
        margin: auto;
        @media (min-width: 769px) {
            display: flex;
            justify-content: space-between;
        }
    }
    /* flex-wrap: wrap; */
    /*Links in footer*/
    a {
        color: var(--color-white);
        margin-right: 1rem;
        font-size: var(--small);
        text-decoration: none;
        
    }
`
const Footer = props => (
    <StyledFooter>
        <div>
            <div>
                <div>
                    <p>
                        Felix Lebedinzew & Jannis Wicke
                        <br />
                        <a href="mailto:hello@pixel-pink.de">
                            hello@pixel-pink.de
                        </a>
                        <br />
                        <a href="tel: +4917681410001">+49 176 81 41 0001</a>
                        <br />
                    </p>
                </div>
                <div>
                    <a href="https://www.instagram.com/pixelpink.berlin/">
                        Instagram
                    </a>
                    <a href="https://www.behance.net/pixelpinkberlin">
                        Behance
                    </a>
                    <a href="#">Dribbble</a>
                    <a href="http://facebook.com/pixelpinkberlin/">Facebook</a>
                </div>
            </div>
            <div>
                <p>
                    © 2019 PixelPink Gbr <br />
                    All Rights Reserved
                </p>
                <Link to="/impressum">Impressum</Link>
                <Link to="/datenschutz">Datenschutz</Link>
                <Link to="/datenschutz">AGBs</Link>
            </div>
        </div>
    </StyledFooter>
)
export default Footer
