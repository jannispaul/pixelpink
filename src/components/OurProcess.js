import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../../content/logos/logo.svg"
// import Icon from "./layout/Icon"
// import { ICONS } from "../theme/Icons"

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 20px;
    /* @media (min-width: 834px) {
        display: none;
    } */
`

const Phase = styled.div`
    display: inline-block;
    background: #f6f6f6;
    border-radius: 10px;
    min-width: 100px;
    padding: var(--space-m);
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & > p {
        margin-bottom: 0;
    }
    & > h3 {
        font-size: 28px;
    }
`

const OurProcess = () => (
    <ContentContainer>
        <Phase>
            <h3>1. Konzept</h3>
            <p>Lorem ipsum</p>
        </Phase>
        <Phase>
            <h3>2. Konzept</h3>
            <p>Lorem ipsum</p>
        </Phase>
        <Phase>
            <h3>3. Konzept</h3>
            <p>Lorem ipsum</p>
        </Phase>
    </ContentContainer>
)

export default OurProcess
