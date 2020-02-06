import React from "react"
// import { Link } from "gatsby"
import styled from "styled-components"
// import logo from "../../content/logos/logo.svg"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow-x: scroll;
    background: #1a1a1a;
    color: white;
    font-size: 18px;
    letter-spacing: 0.39px;
    line-height: 32px;
    padding-bottom: 100px;
    padding-top: 100px;
`

const HeadlineContainer = styled.div`
    max-width: 1168px;
    margin: auto;
    margin-bottom: 100px;
    & > h2 {
        color: var(--color-white);
        & > span {
            color: var(--color-gray-medium);
        }
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
    }
`

const StyledTable = styled.div`
    max-width: 1168px;
    margin: auto;
    /* margin-bottom: 100px; */
    display: grid;
    grid-template-columns: 140px 285px 100px 285px 100px 285px;
    grid-template-rows: 200px 220px 220px 220px;
    grid-template-areas:
        ". header1 . header2 . header3"
        "rowtitle1 service1 . service4 . service7"
        "rowtitle2 service2 . service5 . service8"
        "rowtitle3 service3 . service6 . service9";
    /* @media (min-width: 834px) {
        display: none;
    } */
    & svg {
        fill: var(--color-primary);
        height: 40px;
        width: auto;
        margin-bottom: 10px;
    }
`
const StyledHeader1 = styled.div`
    grid-area: header1;
`
const StyledHeader2 = styled.div`
    grid-area: header2;
`
const StyledHeader3 = styled.div`
    grid-area: header3;
`
const RowTitle = styled.h3`
    font-size: 16px;
    line-height: 22px;
    color: #616161;
    margin-left: 160px;

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

    @media (min-width: 834px) {
        font-size: 24px;
        line-height: 32px;
        margin-left: 100px;
    }
`
const StyledServices1 = styled.div`
    color: #cbcfd3;
    grid-area: service1;
`
const StyledServices2 = styled.div`
    color: #cbcfd3;
    grid-area: service2;
`
const StyledServices3 = styled.div`
    color: #cbcfd3;
    grid-area: service3;
`
const StyledServices4 = styled.div`
    color: #cbcfd3;
    grid-area: service4;
`
const StyledServices5 = styled.div`
    color: #cbcfd3;
    grid-area: service5;
`
const StyledServices6 = styled.div`
    grid-area: service6;
    color: #cbcfd3;
`
const StyledServices7 = styled.div`
    grid-area: service7;
    color: #cbcfd3;
`
const StyledServices8 = styled.div`
    grid-area: service8;
    color: #cbcfd3;
`
const StyledServices9 = styled.div`
    grid-area: service9;
    color: #cbcfd3;
`
const StyledColumn1 = styled.div`
    background: #190d11;
    border: 1px solid;
    ${'' /* border-image: conic-gradient(#33ebfc, #ffe14c, #f96c1f, #f71766, #33ebfc) 1; */}
    border-image: conic-gradient(
            rgba(51,235,252, 0.5),
            rgba(255,225,76, 0.5),
            rgba(249,108,31, 0.5),
            rgba(247,23,102, 0.5),
            rgba(51,235,252, 0.5)
        )
        1;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.5);
    grid-column: 2/3;
    grid-row: 2/5;
    margin-left: -20px;
    margin-top: -20px;

    @media (min-width: 834px) {
        margin-left: -40px;
        margin-top: -40px;
    }
`
const StyledColumn2 = styled.div`
    background: #190d11;
    border: 1px solid;
    border-image: conic-gradient(
            rgba(51,235,252, 0.5),
            rgba(247,23,102, 0.5),
            rgba(249,108,31, 0.5),
            rgba(255,225,76, 0.5),
            rgba(51,235,252, 0.5)
        )
        1;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.5);
    grid-column: 4/5;
    grid-row: 2/5;
    margin-left: -20px;
    margin-top: -20px;

    @media (min-width: 834px) {
        margin-left: -40px;
        margin-top: -40px;
    }
`
const StyledColumn3 = styled.div`
    background: #190d11;
    border: 1px solid;
    border-image: conic-gradient(
            rgba(255,225,76, 0.5),
            rgba(51,235,252, 0.5),
            rgba(249,108,31, 0.5),
            rgba(247,23,102, 0.5),
            rgba(255,225,76, 0.5)
        )
        1;
    box-shadow: 0 2px 28px 0 rgba(0, 0, 0, 0.5);
    grid-column: 6/8;
    grid-row: 2/5;
    margin-left: -20px;
    margin-top: -20px;

    @media (min-width: 834px) {
        margin-left: -40px;
        margin-top: -40px;
    }
`
const StyledIcon = styled(Icon)`
    svg {
        fill: var(--color-pimary);
    }
`

const ServicesTable = () => (
    <StyledContainer>
        <HeadlineContainer>
            <h2>
                Unsere Services
                <br />
                <span>– keine Massenware, nur originelles Design</span>
            </h2>
            <hr />
        </HeadlineContainer>
        <StyledTable>
            <StyledColumn1></StyledColumn1>
            <StyledColumn2></StyledColumn2>
            <StyledColumn3></StyledColumn3>

            <RowTitle>Digitale Produkte</RowTitle>
            <RowTitle>Brand Experience</RowTitle>
            <RowTitle>Marketing deliverables</RowTitle>
            <StyledHeader1>
                <StyledIcon icon={ICONS.TRIANGLE} />
                <h2>Strategisches <br /> Design</h2>
            </StyledHeader1>
            <StyledHeader2>
                <StyledIcon icon={ICONS.CIRCLE} />
                <h2>
                    Design <br />
                    Thinking
                </h2>
            </StyledHeader2>
            <StyledHeader3>
                <StyledIcon icon={ICONS.SQUARE} />
                <h2>
                    Build <br />& Deliver
                </h2>
            </StyledHeader3>
            <StyledServices1>
                User Research
                <br />
                Heuristic Evaluation
                <br />
                Market UX Audit
                <br />
                Roadmap planning
            </StyledServices1>
            <StyledServices2>
                Brand strategy <br />
                Tone of Voice <br /> Brand identity <br /> Service design
            </StyledServices2>
            <StyledServices3>
                Channel Strategy <br />
                Communications Strategy <br />
                Storytelling
            </StyledServices3>
            <StyledServices4>
                Visual Design <br />
                Product UX / UI <br />
                Prototyping <br />
                User Testing <br />
                Design systems
            </StyledServices4>
            <StyledServices5>
                Brand Guidelines <br />
                UX Priciples <br />
                Service Blueprints
            </StyledServices5>
            <StyledServices6>
                Product Design <br />
                Advertising Campaings
                <br /> Pitch decks{" "}
            </StyledServices6>
            <StyledServices7>
                Design Iterations
                <br /> Quality Assurance <br />
                Frontend development <br />
                Gatsby / React development
                <br /> Mobile First{" "}
            </StyledServices7>
            <StyledServices8>
                Styleguides
                <br /> Touchpoint design{" "}
            </StyledServices8>
            <StyledServices9>
                SEO <br />
                Targeted Ad-campains <br />
                Content Marketing <br />
                Social-Media Management <br />
                Consulting Services{" "}
            </StyledServices9>
        </StyledTable>
    </StyledContainer>
)

export default ServicesTable
