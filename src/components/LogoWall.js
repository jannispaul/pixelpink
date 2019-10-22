import React from "react"
import styled from "styled-components"
import boschLogo from "../../content/logos/boschLogo.svg"


const StyledSection = styled.section`
    background: var(--color-gray-light);
    /* padding-top: 130px;
    padding-bottom: 130px; */
    /* padding: 0px var(--padding-side); */
    padding: var(--padding-vertical) var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
        /* padding: 0 var(--padding-side); */
    }

    h2 {
        color: var(--color-black);
    }

    p {
        color: var(--color-gray-medium);
        /* padding-right: 48px; */
    }

    h2 > span {
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        /* background-color: var(--color-gray-medium); */
        /* border: none; */
    }

    @media (min-width: 834px) {
    }
`

const LogoWall = props => (
    <StyledSection>
        <h2>Wir sind ein Designstudio für digitale Produkte (UX | UI | DEV).
            Wir arbeiten mit großen Marken, KMUs, Startups und in Agenturen.</h2>

    </StyledSection>
)

export default LogoWall
