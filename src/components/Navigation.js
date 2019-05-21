import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../content/images/logo.svg"
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
        top: 0;
        height: 80px;
        box-shadow: 0 1px 14px rgba(0, 0, 0, 0.1);
        -ms-grid-columns: 1fr auto auto auto auto; /*IE grid*/
        grid-template-columns: 1fr repeat(4, auto);
        justify-items: start;
        padding: 0 var(--space-unit);
        font-size: 18px;
    }
    @media (min-width: 1441px) {
        width: 300px;
        height: 100%;
        box-shadow: 0 1px 14px rgba(0, 0, 0, 0.1);
        grid-template-columns: 1fr;
        grid-template-rows: 1fr repeat(4, auto) 1fr;
    }
`

const NavItem = styled(Link)`
    padding: calc(0.5 * var(--space-s)) 0;
    font-size: 12px;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: var(--color-medium);

    & svg {
        fill: var(--color-medium);
        width: 24px;
        height: 24px;
        display: block;
        margin: 4px;
        margin-left: auto;
        margin-right: auto;
    }
    &.active,
    &.active span,
    &.active svg {
        color: var(--color-primary-light);
        fill: var(--color-primary-light);
    }
    &:hover {
        color: var(--color-primary-light);
        fill: var(--color-primary-light);
    }

    @media (min-width: 834px) {
        font-size: 16px;
        display: flex;
        text-transform: uppercase;
        font-weight: 600;
        /*Hide home link on desktop*/
        :nth-of-type(2) {
            display: none;
        }
        & svg {
            display: none;
        }
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

    @media (min-width: 834px) {
        display: flex;
    }
`

const Nav = () => (
    <StyledNav>
        <Logo to="/">
            <img src={logo} alt="PixelPink Logo" />
        </Logo>
        <NavItem to="/" activeClassName="active">
            <Icon icon={ICONS.PHONE} />
            <span>Home</span>
        </NavItem>
        <NavItem to="/work" activeClassName="active">
            <Icon icon={ICONS.PHONE} />
            <span>Work</span>
        </NavItem>
        <NavItem to="/services" activeClassName="active">
            <Icon icon={ICONS.PHONE} />
            <span>Services</span>
        </NavItem>
        <NavItem to="/ueber-uns" activeClassName="active">
            <Icon icon={ICONS.PHONE} />
            <span>Über uns</span>
        </NavItem>
        <NavItem to="/kontakt" activeClassName="active">
            <Icon icon={ICONS.PHONE} />
            <span>Kontakt</span>
        </NavItem>
    </StyledNav>
)

export default Nav
