import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
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
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    margin: auto;
    text-decoration: none;
    color: var(--color-gray-darkmedium);
    text-transform: uppercase;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & > svg {
        fill: var(--color-gray-darkmedium);
        margin: 4px auto;
    }
    &.active {
        color: var(--color-black);
        & > svg {
            fill: var(--color-black);
        }
    }
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
        margin-top: -2px;
    }
`

const Nav = () => (
    <StyledNav>
        <NavItem to="/" activeClassName="active">
            <Icon icon={ICONS.SQUARE} />
            <span>Home</span>
        </NavItem>
        <NavItem to="/projekte/" activeClassName="active">
            <Icon icon={ICONS.CIRCLE} />
            <span>Projekte</span>
        </NavItem>
        <NavItem to="/kontakt/" activeClassName="active">
            <ContactCircle>
                <Icon icon={ICONS.MAIL} />
            </ContactCircle>
        </NavItem>
        <NavItem to="/services/" activeClassName="active">
            <Icon icon={ICONS.TRIANGLE} />
            <span>Services</span>
        </NavItem>
        <NavItem to="/ueber-uns/" activeClassName="active">
            <Icon icon={ICONS.POLYGON} />
            <span>About</span>
        </NavItem>
    </StyledNav>
)

export default Nav
