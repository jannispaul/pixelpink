import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { LanguageContext } from "../context"
import LanguageSwitch from "./LanguageSwitch"

const MobileNav = styled.div`
    padding: 35% var(--padding-side);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    width: 100%;
    z-index: 2;
    background: var(--color-white);
    transform: ${(props) =>
        props.showMobileMenu ? "translateY(0%)" : "translateY(-100%)"};
    transition: transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
    & a {
        transform: ${(props) =>
            props.showMobileMenu ? "translateY(0%)" : "translateY(-100px)"};
    }
`

/*Mobile Nav Links with animation based on prop */
const StyledLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-black);
    text-decoration: none;
    /* text-transform: uppercase; */
    font-weight: 600;
    font-size: 24px;
    text-align: center;
    flex-grow: 1;

    &.active {
        color: var(--color-primary);
    }

    /*animation of Menu items flying in slightly delayed*/
    &:last-of-type {
        transition-delay: 0;
    }
    &:nth-of-type(4) {
        transition-delay: 50ms;
    }
    &:nth-of-type(3) {
        transition-delay: 100ms;
    }
    &:nth-of-type(2) {
        transition-delay: 150ms;
    }
    &:nth-of-type(1) {
        transition-delay: 200ms;
    }
    transition: transform 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
`

class MobileMenu extends React.Component {
    render() {
        let language = this.context
        return (
            <MobileNav showMobileMenu={this.props.showMobileMenu}>
                <StyledLink to={language.home.link} activeClassName="active">
                    {language.home.title}
                </StyledLink>
                <StyledLink
                    to={language.projects.link}
                    activeClassName="active"
                >
                    {language.projects.title}
                </StyledLink>
                <StyledLink to={language.aboutUs.link} activeClassName="active">
                    {language.aboutUs.title}
                </StyledLink>
                <StyledLink
                    to={language.services.link}
                    activeClassName="active"
                >
                    {language.services.title}
                </StyledLink>
                <StyledLink to={language.contact.link} activeClassName="active">
                    {language.contact.title}
                </StyledLink>
                <LanguageSwitch></LanguageSwitch>
            </MobileNav>
        )
    }
}

MobileMenu.contextType = LanguageContext

export default MobileMenu
