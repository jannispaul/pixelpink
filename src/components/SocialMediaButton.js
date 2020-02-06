import React from "react"
import styled from "styled-components"

// const MoveRight = keyframes`
//     from {transform: translateX(0);}
//     to {transform: translateX(5px);}
// `

const StyledButton = styled.a`
    text-decoration: none;
    background: #eee;
    color: var(--color-gray-dark);
    padding: 24px;
    font-size: 18px;
    border-radius: 4px;
    margin-bottom: var(--space-s);
    ${"" /* margin-right: var(--space-s); */}
    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);
    display: flex;
    justify-content: center;
    align-items: center;

    & > svg {
        fill: #656d78;
        width: 32px;
        height: 32px;
        margin-right: 16px;
        margin-left: -12px;
    }

    @media (min-width: 500px) {
        width: ${props => (props.fullwidth ? "100%" : "auto")};
    }

    :hover {
        color: var(--color-white);
        background: var(--color-black);
        & > svg {
            fill: #fff;
        }
        transform: translateY(-1px);
        transition: all var(--time-fast);
        cursor: pointer;
    }
    :active {
        background: ${props =>
            props.primary
                ? "var(--color-primary-dark)"
                : "var(--color-accent-dark)"};
        transform: translateY(1px);
    }
`

const Button = props => (
    <StyledButton
        fullwidth={props.fullwidth}
        white={props.white}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
    >
        {props.children}
    </StyledButton>
)

export default Button
