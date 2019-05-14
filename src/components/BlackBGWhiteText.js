import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    background-color: var(--color-black);
    padding-top: 130px;
    padding-bottom: 130px;
    padding: 42px var(--padding-side);

    h2 {
        color: var(--color-white);
    }

    p {
        color: var(--color-gray-medium);
        padding-right: 48px;
    }

    &>h2>span{
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        background-color: var(--color-gray-medium);
        border: none;
    }

    @media  (min-width: 834px) {
        padding: 130px var(--padding-side);
    }
`

const BlackBGWhiteText = props => (
    <StyledSection>
        <h2> {props.mainline} <br/><span >{props.subline}</span></h2>
        <hr></hr>
        <p> {props.body}</p>
        <button>Mehr erfahren ➝</button>
    </StyledSection>
)

export default BlackBGWhiteText
