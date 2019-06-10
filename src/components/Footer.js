import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledFooter = styled.div`
    background-color: var(--color-black);
    font-size: var(--small);
    padding: 1rem;
    color: white;
    display: flex;
    flex-wrap: wrap;
    @media (min-width: 769px) {
        padding: 2rem;
    }
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
        <p>Felix Lebedinzew & Jannis Wicke</p>
        <a href="mailto:hello@pixel-pink.de">hello@pixel-pink.de</a><br/>
        <a href="tel: +4917681410001">+49 176 81 41 0001</a><br/>
        <a href="#">Instagram</a><a href="#">Behance</a><a href="#">Dribbble</a><a href="#">Facebook</a>
        <p>© 2019 PixelPink Gbr <br/>All Rights Reserved</p>
        <Link to="/impressum">Impressum</Link>
        <Link to="/datenschutz">Datenschutz</Link>
        <Link to="/datenschutz">AGBs</Link>
    </StyledFooter>
)
export default Footer
