import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../../content/logos/logo.svg"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledTable = styled.div`
    max-width: 1168px;
    margin: auto;
    display: grid;
    grid-template-columns: 100px 285px 100px 285px 100px 285px;
    grid-template-rows: 180px 240px 240px 240px;
    grid-template-areas:
        ".  header1 . . . ."
        "rowtitle1 service1 . . . ."
        "rowtitle2 service1 . . . ."
        "rowtitle3 service1 . . . .";
    /* @media (min-width: 834px) {
        display: none;
    } */
`
const StyledHeader = styled.div`
    :nth-of-type(1) {
        grid-area: header1;
        color: red;
    }
    :nth-of-type(2) {
        grid-area: header2;
    }
    :nth-of-type(3) {
        grid-area: header3;
    }
`
const RowTitle = styled.div`
    transform-origin: 0 0;
    transform: rotate(-90deg);
    :nth-of-type(1) {
        grid-area: rowtitle1;
    }
    :nth-of-type(2) {
        grid-area: rowtitle2;
    }
    :nth-of-type(3) {
        grid-area: rowtitle3;
    }
`
const StyledServices = styled.div`
    :nth-of-type(1) {
        grid-area: service1;
        color: red;
    }
    :nth-of-type(2) {
        grid-area: service2;
    }
    :nth-of-type(3) {
        grid-area: service3;
    }
`
const ServicesTable = () => (
    <StyledTable>
        <RowTitle>Digitale Produkte</RowTitle>
        <RowTitle>Brand Experience</RowTitle>
        <RowTitle>Marketing deliverables</RowTitle>
        <StyledHeader>
            <Icon icon={ICONS.SQUARE} />
            <h2>Strategisches Design</h2>
        </StyledHeader>
        <StyledHeader>
            <Icon icon={ICONS.SQUARE} />
            <h2>Strategisches Design</h2>
        </StyledHeader>
        <StyledHeader>
            <Icon icon={ICONS.SQUARE} />
            <h2>Strategisches Design</h2>
        </StyledHeader>
        <StyledServices>
            <p>
                User research Heuristic Evaluation Market UX Audit Roadmap
                planning
            </p>
        </StyledServices>
    </StyledTable>
)

export default ServicesTable
