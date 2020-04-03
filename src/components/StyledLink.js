import React from "react"
import styled, { keyframes } from "styled-components"
import { Link } from "gatsby"

const MoveRight = keyframes`
    from {transform: translateX(0);}
    to {transform: translateX(5px);}
`

const StyledLinkInternal = styled(Link)`
    text-decoration: none;
    font-weight: 600;
    color: var(--color-primary);
    margin-bottom: var(--space-s);
    margin-right: var(--space-s);
    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);
    :after {
        margin-left: 5px;
        display: inline-block;
        content: "➝";
        transform: translateX(0);
    }
    :hover::after {
        animation: 300ms ${MoveRight} alternate infinite;
    }

    @media (min-width: 500px) {
        width: ${props => (props.fullwidth ? "100%" : "auto")};
    }

    :hover {
        color: ${props =>
            props.white ? "var(--color-white)" : "var(--color-black)"};
        background: ${props =>
            props.primary ? "none" : "var(--color-accent-light)"};
        border-color: ${props =>
            props.primary
                ? "var(--color-primary-light)"
                : "var(--color-accent-light)"};
        transform: translateY(-1px);
        transition: all var(--time-fast);
    }
    :active {
        background: ${props =>
            props.primary
                ? "var(--color-primary-dark)"
                : "var(--color-accent-dark)"};
        transform: translateY(1px);
    }
`

const StyledLink = props => (
    <StyledLinkInternal
        fullwidth={props.fullwidth}
        white={props.white}
        href={props.link}
        to={props.to}
    >
        {props.children}
    </StyledLinkInternal>
)

export default StyledLink
