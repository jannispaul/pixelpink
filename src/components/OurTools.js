import React from "react"
import styled from "styled-components"
import logo from "../../content/logos/logo.svg"

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: calc(var(--padding-vertical) / 2);
    align-items: center;
    /* justify-items: center; */
    @media (min-width: 834px) {
        grid-template-columns: repeat(6, 1fr);
    }
`

const OurProcess = () => (
    <ContentContainer>
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
        <img src={logo} alt="" />
    </ContentContainer>
)

export default OurProcess
