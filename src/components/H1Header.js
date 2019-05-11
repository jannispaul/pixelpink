import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    padding-top: 130px;
    padding-bottom: 130px;
    padding: 42px var(--padding-side);

    @media  (min-width: 834px) {
        padding: 130px var(--padding-side);
    }


    &>h1>span{
        color: var(--color-gray-medium);
    }
`

const H1Header = props => (
    <StyledSection>
        <h1> {props.mainline} <br/><span >{props.subline}</span></h1>
    </StyledSection>
)

export default H1Header
