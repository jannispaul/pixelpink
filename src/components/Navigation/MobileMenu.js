import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const MobileNav = styled.div`
    padding: 50px var(--padding-side);
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
    z-index: 2;
    background: var(--color-white);
    transform: ${props =>
        props.showMobileMenu ? "translateY(0%)" : "translateY(100%)"};
    transition: transform 400ms cubic-bezier(0.215, 0.61, 0.355, 1);
    & a {
        transform: ${props =>
            props.showMobileMenu ? "translateY(0%)" : "translateY(-100px)"};
    }
`

/*Mobile Nav Links with animation based on prop */
const StyledLink = styled(Link)`
    color: var(--color-black);
    /* margin-top: 5vh; */
    display: block;
    text-decoration: none;
    /* text-transform: uppercase; */
    font-weight: 600;
    text-align: center;

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

const MobileMenu = props => {
    return (
        <MobileNav showMobileMenu={props.showMobileMenu}>
            <StyledLink to="/" activeClassName="active">
                Home
            </StyledLink>
            <StyledLink to="/work/" activeClassName="active">
                Projekte
            </StyledLink>
            <StyledLink to="/services/" activeClassName="active">
                Services
            </StyledLink>
            <StyledLink to="/ueber-uns/" activeClassName="active">
                Über uns
            </StyledLink>
            <StyledLink to="/kontakt/" activeClassName="active">
                Kontakt
            </StyledLink>
        </MobileNav>
    )
}
export default MobileMenu
