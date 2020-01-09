import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../../content/logos/logo.svg"
// import Icon from "./layout/Icon"
// import { ICONS } from "../theme/Icons"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 20px;
    align-items: center;
    text-align: center;
    @media (min-width: 834px) {
        grid-template-rows: 1fr;
        grid-template-columns: repeat(6, 1fr);
    }
    & > div {
        position: relative;
        height: 100%;
    }
    & > div:not(:last-of-type) ::after {
        content: "→";
        color: var(--color-primary);
        font-size: 30px;
        position: absolute;
        /* margin: auto; */
        bottom: -25px;
        z-index: 2;
        transform: rotate(90deg);
        @media (min-width: 834px) {
            transform: rotate(0);
            top: 0;
            right: -25px;
            bottom: 0;
        }
    }
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
`

const OurProcess = () => (
    <ContentContainer>
        <div>
            <p>
                <strong>Problem</strong>
            </p>
        </div>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>1. Entdecken</strong>
            </p>
            <p>Research, Analyse</p>
        </Phase>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>2. Definieren</strong>
            </p>
            <p>Understand, Synthesize</p>
        </Phase>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>3. Design</strong>
            </p>
            <p>Prototype, test, refine</p>
        </Phase>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>4. Test</strong>
            </p>
            <p>Prototype, test, refine</p>
        </Phase>

        <div>
            <p>
                <strong>Lösung</strong>
            </p>
        </div>
    </ContentContainer>
)

export default OurProcess
