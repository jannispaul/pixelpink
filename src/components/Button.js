import React from 'react'
import styled, {keyframes} from 'styled-components'

const MoveRight = keyframes`
    from {transform: translateX(0);}
    to {transform: translateX(5px);}
`



const StyledButton = styled.a`
    /* display: inline-block; */
    text-decoration: none;
    /* background: ${props => props.primary ? "var(--color-primary)" : "var(--color-accent)"}; */
    /* border: 2px solid ${props => props.primary ? "var(--color-primary)" : "var(--color-accent)"}; */
    /* border-radius: 5px; */
    /* text-align: center; */
    color: ${props => props.white ? "var(--color-white)" : "var(--color-gray-dark)"};
    /* padding: calc(0.5 * var(--space-unit)) calc(0.75 * var(--space-unit)) calc(0.5 * var(--space-unit) - 2px) calc(0.75 * var(--space-unit)); */
    /* margin-top: var(--space-s); */
    margin-bottom: var(--space-s);
    margin-right: var(--space-s);
    width: 100%;
    transform: translateY(0);
    transition: all var(--time-fast);
    :after{
        margin-left: 5px;
        display:inline-block;
        content:  "➝";
        transform: translateX(0);

    }
    :hover::after{
        animation:  300ms ${MoveRight} alternate infinite;
        /* transform: translateX(30px); */
    }

    @media (min-width: 500px){
        width: ${props => props.fullwidth ? "100%" : "auto"};
    }

    :hover{
      color:${props => props.white ? "var(--color-white)" : "var(--color-black)"};
      background: ${props => props.primary ? "none" : "var(--color-accent-light)"};
      border-color: ${props => props.primary ? "var(--color-primary-light)" : "var(--color-accent-light)"};
      transform: translateY(-1px);
      transition: all var(--time-fast);    
    }
    :active{
      background: ${props => props.primary ? "var(--color-primary-dark)" : "var(--color-accent-dark)"};
      transform: translateY(1px);
    }
`


const Button = props => (
  <StyledButton fullwidth={props.fullwidth} white={props.white} href={props.link}>
    {props.children}
  </StyledButton>
)

export default Button