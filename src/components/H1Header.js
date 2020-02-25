import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    /* padding-top: 130px;
    padding-bottom: 130px; */
    padding: var(--padding-vertical) var(--padding-side);

    @media (min-width: 834px) {
        /* padding: 130px var(--padding-side); */
    }
    & > h1 {
        max-width: 1168px;
        margin: auto;
    }

    & > h1 > span {
        color: var(--color-gray-medium);
    }
`

const H1Header = props => (
    <StyledSection data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease">
        <h1>
            {" "}
            {props.mainline} <br />
            <span>{props.subline}</span>
        </h1>
    </StyledSection>
)

export default H1Header
