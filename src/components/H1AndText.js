import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    max-width: 1168px;
    margin: auto;
    padding: var(--padding-vertical) var(--padding-side);
    /* padding: var(--padding-vertical) var(--padding-side); */

    p {
        color: var(--color-gray-dark);
        /* padding-right: 48px; */
        max-width: 750px;
    }

    & > h1 > span {
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }

    /* @media (min-width: 834px) {
        padding: 130px var(--padding-side);
    } */
`



const H1AndText = props => (
    <StyledSection>
        <h1>
            {" "}
            {props.mainline} <br />
            <span>{props.subline}</span>
        </h1>
        <hr />
        <p> {props.body}</p>
    </StyledSection>
)

export default H1AndText
