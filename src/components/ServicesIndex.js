import React from "react"
import styled from "styled-components"
import StyledLink from "../components/StyledLink"
import { Link } from "gatsby"

const StyledSection = styled.section`
    background-color: var(--color-black);
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
        color: var(--color-white);
        & > span {
            color: var(--color-gray-medium);
        }
    }

    p {
        color: var(--color-gray-medium);
        margin-bottom: 0;
        max-width: 850px;
    }

    h2 > Underline {
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
    }

    @media (min-width: 834px) {
    }
`

const StyledGrid = styled.div`
    margin-top: 40px;
    /* width: 40%; */
    display: grid;
    @media (min-width: 834px) {
        grid-template-columns: repeat(2, 1fr);
    }

    & > a {
        display: grid;
        grid-template-columns: 60px auto;
        align-items: center;
        margin-bottom: 40px;
        justify-content: flex-start;
    }

    a {
        padding: 10px;
        -webkit-filter: opacity(100%); /* Safari 6.0 - 9.0 */
        filter: opacity(100%);
        -webkit-transition: filter 0.1s ease-in;
        -moz-transition: filter 0.1s ease-in;
        -o-transition: filter 0.1s ease-in;
        -ms-transition: filter 0.1s ease-in;
        transition: filter 0.1s ease-in;
    }

    a:hover {
        background: #333333;
        border-radius: 8px;
        -webkit-filter: opacity(10%); /* Safari 6.0 - 9.0 */
        filter: opacity(100%);
        -webkit-transition: filter 0.1s ease-in;
        -moz-transition: filter 0.1s ease-in;
        -o-transition: filter 0.1s ease-in;
        -ms-transition: filter 0.1s ease-in;
        transition: filter 0.1s ease-in;
    }
`

const Underline = styled.span`
    text-decoration: underline;
    font-weight: 700;
`

const Triangle = styled.div`
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 20px 36px 20px;
    border-color: transparent transparent var(--color-primary) transparent;
`

const Circle = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 20px;
    background: var(--color-primary);
`

const Square = styled.div`
    width: 36px;
    height: 36px;
    background: var(--color-primary);
`

const Hexagon = styled.div`
    position: relative;
    width: 36px;
    height: 20.78px;
    background: var(--color-primary);
    margin: 17.39px 0;

    :before,
    :after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
    }

    :before {
        bottom: 100%;
        border-bottom: 10.39px solid #e6004e;
    }

    :after {
        top: 100%;
        width: 0;
        border-top: 10.39px solid #e6004e;
    }
`

const ServicesIndex = props => (
    <StyledSection>
        <div>
            <h2 data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease">
                Unsere Services
                <br />
                <span>– keine Massenware, nur originelles Design</span>
            </h2>
            <hr />
            <p data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease">
                Unsere Herangehensweise an neue Projekte ist immer die gleiche –
                es ist nie das gleiche!
                <br /> Daher hören wir Ihnen zuerst aufmerksam zu und definieren
                aus den Resultaten die individuell notwendigen Prozessschritte
                für Dein Projekt.
            </p>

            <StyledGrid>
                <Link to="/services#strategisches-design">
                    <Triangle></Triangle>
                    <p
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease"
                    >
                        <h4>Konzeption</h4>
                        Wir entwerfen das passende Grundgerüst für dein Produkt.
                    </p>
                </Link>

                <Link to="/services#design-thinking">
                    <Circle></Circle>
                    <p
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease"
                    >
                        <h4>Design</h4>
                        Wir bilden ästetische Gestalt im Einklang mit deiner
                        Marke.
                    </p>
                </Link>

                <Link to="/services#build-and-deliver">
                    <Square></Square>
                    <p
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease"
                    >
                        <h4>Entwicklung</h4>
                        Wir implementieren dein Design mit technischer
                        Exzellenz.
                    </p>
                </Link>

                <Link to="/services#build-and-deliver">
                    <Hexagon></Hexagon>
                    <p
                        data-sal="slide-up"
                        data-sal-delay="0"
                        data-sal-easing="ease"
                    >
                        <h4>Marketing</h4>
                        Wir brigen dein Produkt in den Markt.
                    </p>
                </Link>
            </StyledGrid>

            <StyledLink to="/services" white="true">
                Alle Services entdecken
            </StyledLink>
        </div>
    </StyledSection>
)

export default ServicesIndex
