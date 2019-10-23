import React from "react"
import styled from "styled-components"
import boschLogo from "../../content/logos/boschLogo.svg"


const StyledSection = styled.section`
    background: var(--color-gray-light);
    padding: var(--padding-vertical) var(--padding-side);

    & > div, h2 {
        max-width: 1168px;
        margin: auto;
        color: var(--color-black);
        /* padding: 0 var(--padding-side); */
    }
`

const LogoWall = props => (
    <StyledSection>
        <h2>
            {" "}
            {props.mainline} <br />
            <span>{props.subline}</span>
        </h2>

    </StyledSection>
)

export default LogoWall
