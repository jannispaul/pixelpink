import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../../content/logos/logo.svg"
// import Icon from "./layout/Icon"
// import { ICONS } from "../theme/Icons"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const ContentContainer = styled.div`
    /* display: grid;
    grid-template-columns: repeat(1, 1fr); */
    display: flex;
    align-items: stretch;
    text-align: center;
    flex-direction: column;

    @media (min-width: 834px) {
        flex-direction: row;
        grid-template-rows: 1fr;
        grid-template-columns: 6fr 1fr 6fr 1fr 6fr 1fr 6fr 1fr 6fr 1fr 6fr;
    }
    & p {
        margin-bottom: 0;
    }
    & > div {
        /* position: relative;
        height: 100%; */
        display: flex;
        align-items: center;
    }
    /* & > div:not(:last-of-type) ::after {
        content: "→";
        color: var(--color-primary);
        font-size: 30px;
        position: absolute;

        bottom: -25px;
        z-index: 2;
        transform: rotate(90deg);
        @media (min-width: 834px) {
            transform: rotate(0);
            top: 0;
            right: -25px;
            bottom: 0;
        }
    } */
`

const Phase = styled.div`
    display: inline-block;
    flex: 1;
    background: #f6f6f6;
    border-radius: 10px;
    width: 100%;
    min-width: 100px;
    padding: var(--space-m);
    text-align: center;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 834px) {
        max-width: 180px;
    }
`
const Arrow = styled.div`
    color: var(--color-primary);
    font-size: 30px;
    z-index: 2;
    transform: rotate(90deg);
    margin: 10px;
    @media (min-width: 834px) {
        transform: rotate(0);
    }
`
const OurProcess = () => (
    <ContentContainer>
        <div>
            <p>
                <strong>Problem</strong>
            </p>
        </div>
        <Arrow>→</Arrow>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>1. Entdecken</strong>
            </p>
            <p>Research, Analyse</p>
        </Phase>
        <Arrow>→</Arrow>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>2. Definieren</strong>
            </p>
            <p>Understand, Synthesize</p>
        </Phase>
        <Arrow>→</Arrow>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>3. Design</strong>
            </p>
            <p>Prototype, test, refine</p>
        </Phase>
        <Arrow>→</Arrow>
        <Phase>
            <Icon icon={ICONS.SQUARE} />
            <p>
                <strong>4. Test</strong>
            </p>
            <p>Prototype, test, refine</p>
        </Phase>
        <Arrow>→</Arrow>

        <div>
            <p>
                <strong>Lösung</strong>
            </p>
        </div>
    </ContentContainer>
)

export default OurProcess
