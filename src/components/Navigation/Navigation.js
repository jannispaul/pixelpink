import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import logo from "../../../content/logos/logo.svg"
import { LanguageContext } from "../context"

const StyledNav = styled.div`
    display: none;

    @media (min-width: 834px) {
        display: grid;
        align-items: center;
        padding: 0;
        top: 0;
        height: 80px;
        box-shadow: 0 1px 14px rgba(0, 0, 0, 0.1);
        -ms-grid-columns: 1fr auto auto auto auto; /*IE grid*/
        grid-template-columns: 1fr repeat(4, auto);
        justify-items: start;
        padding: 0 var(--padding-side);
        font-size: 18px;
        position: fixed;
        width: 100%;
        z-index: 100;
        background: var(--color-white);
    }
    @media (min-width: 1441px) {
        width: 300px;
        max-height: 100%;
        height: 100vh;
        position: fixed;
        box-shadow: 0 1px 14px rgba(0, 0, 0, 0.1);
        grid-template-columns: 1fr;
        grid-template-rows: 1fr repeat(4, auto) 1fr;
    }
`

const NavItem = styled(Link)`
    font-size: 11px;
    font-weight: 700;
    text-align: center;
    &.active {
        margin: none;
    }
    margin: auto;
    text-decoration: none;
    color: var(--color-medium);
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 14px 30px;

    & svg {
        fill: var(--color-medium);
        width: 24px;
        height: 24px;
        display: block;
        margin: 4px;
        margin-left: auto;
        margin-right: auto;
    }

    &:hover {
        color: var(--color-primary);
        fill: var(--color-gray-dark);
    }

    @media (min-width: 834px) {
        &:last-of-type {
            color: var(--color-white);
            background: var(--color-primary);
            border-radius: 200px;
            transition: all 0.1s ease-in;
            &:hover {
                background: var(--color-primary-dark);
                color: var(--color-white);
                transition: all 0.1s ease-in;
            }
        }

        font-size: 14px;
        display: flex;
        text-transform: uppercase;
        font-weight: 700;
        /*Hide home link on desktop*/
        :nth-of-type(2) {
            display: none;
        }
        & svg {
            display: none;
        }
        &.active:not(:last-of-type),
        &.active span:not(:last-of-type),
        &.active svg {
            color: var(--color-primary);
            fill: var(--color-primary);
        }

        &.active:last-of-type,
        &.active span:last-of-type {
            background: none;
            color: var(--color-primary);
            /* margin-top: 0; */
        }
    }
    @media (min-width: 1441px) {
        font-size: 14px;
        text-align: center;
        display: flex;
        justify-content: center;
        margin-bottom: 1.3vh;

        &:last-of-type {
            display: inline-block;
            margin-top: 0.8rem;
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
        height: 100%;
        align-items: center;
    }

    @media (min-width: 1441px) {
        margin: auto;
    }
`

class Nav extends React.Component {
    render() {
        let language = this.context
        return (
            <StyledNav>
                <Logo to={language.home.link}>
                    <img src={logo} alt="PixelPink Logo" />
                </Logo>
                <NavItem to={language.home.link} activeClassName="active">
                    <span>Home</span>
                </NavItem>
                <NavItem to={language.projects.link} activeClassName="active">
                    <span>{language.projects.title}</span>
                </NavItem>
                <NavItem to={language.aboutUs.link} activeClassName="active">
                    <span>{language.aboutUs.title} </span>
                </NavItem>
                <NavItem to={language.services.link} activeClassName="active">
                    <span>{language.services.title}</span>
                </NavItem>
                <NavItem to={language.contact.link} activeClassName="active">
                    <span>{language.contact.title}</span>
                </NavItem>
            </StyledNav>
        )
    }
}
Nav.contextType = LanguageContext

export default Nav
