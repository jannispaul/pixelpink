import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../content/logos/logo.svg"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledNav = styled.div`
    overflow: hidden;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 100;
    background: white;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.05);
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: repeat(5, 1fr);
    -ms-grid-row-align: center;
    align-items: center;
    justify-items: center;
    padding: 0;

    @media (min-width: 834px) {
        display: none;
    }
`

const NavItem = styled(Link)`
    ${'' /* padding: calc(3 * var(--space-s)) var(--space-s); */}
    font-size: 11px;
    font-weight: 700;
    ${'' /* width: 100%; */}
    text-align: center;
    margin: auto;
    text-decoration: none;
    color: var(--color-gray-dark);
    text-transform: uppercase;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    &.active {
        color: var(--color-black);
        &>div {
            background: var(--color-black);
        }

        
    }

    &:hover {
        color: var(--color-gray-dark);
        fill: var(--color-gray-dark);
    }
`

const Logo = styled(Link)`
    display: none;
    color: var(--color-primary);
    text-decoration: none;
    margin-bottom: 0;

    & img {
        max-height: 50px;
        margin-bottom: 0;
    }
`

const Square = styled.div`
    width: 18px;
    height: 18px; 
    background: var(--color-gray-dark);
    margin: 4px auto;
`

const Circle = styled.div`
    width: 18px;
    height: 18px; 
    background: var(--color-gray-dark); 
    border-radius: 20px;
    margin: 4px auto;

`

const ContactCircle = styled.div`
    width: 46px;
    height: 46px; 
    border-radius: 200px;
    background: var(--color-primary);
    display: flex;
    align-items: center;

    & svg {
        fill: var(--color-white);
        width: 24px;
        height: 24px;
        display: block;
        margin: 0 auto;
        margin-top: -3px;
    }
`

const Triangle = styled.div`
    width: 0px;
    height: 0px; 
    border-style: solid;
    border-width: 0 10px 18px 10px;
    border-color: transparent transparent var(--color-gray-dark) transparent;
    margin: 4px auto;

`

const Polygon = styled.div`
    width: 18px;
    height: 18px; 
    background: var(--color-gray-dark);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    margin: 4px auto;

`


const Nav = () => (
    <StyledNav>
        <Logo to="/">
            <img src={logo} alt="PixelPink Logo" />
        </Logo>
        <NavItem to="/" activeClassName="active">
            <Square></Square>
            <span>Home</span>
        </NavItem>
        <NavItem to="/work" activeClassName="active">
            <Circle></Circle>
            <span>Projekte</span>
        </NavItem>
        <NavItem to="/kontakt" activeClassName="active">
            <ContactCircle>
                <Icon icon={ICONS.MAIL} />
            </ContactCircle>
        </NavItem>
        <NavItem to="/services" activeClassName="active">
            <Triangle></Triangle>
            <span>Services</span>
        </NavItem>
        <NavItem to="/ueber-uns" activeClassName="active">
            <Polygon></Polygon>
            <span>Über uns</span>
        </NavItem>
    </StyledNav>
)

export default Nav
