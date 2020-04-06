import React from "react"
import styled from "styled-components"
import ScrollAnchor from "../../components/ScrollAnchor"

const StyledSection = styled.div`
    width: 100%;
    padding: 0 var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
        & > div {
            margin-bottom: 80px;
        }
    }

    p {
        color: var(--color-gray-dark);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }

    & > div {
        @media (min-width: 769px) {
            grid-template-columns: 1fr 1fr;
            display: grid;
            grid-gap: 100px;
        }
    }
`

const Triangle = styled.div`
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0 20px 36px 20px;
    border-color: transparent transparent var(--color-primary) transparent;
    margin-bottom: 20px;
`

const Circle = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 20px;
    background: var(--color-primary);
    margin-bottom: 20px;
`

// const Square = styled.div`
//     width: 36px;
//     height: 36px;
//     background: var(--color-primary);
//     margin-bottom: 20px;

// `

const div = props => (
    <StyledSection>
        <div>
            <div>
                <ScrollAnchor id="strategisches-design"></ScrollAnchor>
                <Triangle
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                ></Triangle>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="50"
                    data-sal-easing="ease-out"
                >
                    Konzeption
                </h2>
                <hr
                    data-sal="slide-up"
                    data-sal-delay="75"
                    data-sal-easing="ease-out"
                />
                <p
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease-out"
                >
                    Wo drückt denn der Schuh? Erweisen sich bestimmte Merkmale
                    Deines Produktes als unverständlich, heben spätestens Deine
                    Nutzer und Kunden mahnend den Finger. Um diesem
                    wirtschaftlichen Misserfolg vorzubeugen bildet die
                    Ursachenforschung und ein fundamentales Konzept für uns den
                    Grundstein für Dein erfolgreiches Projekt. Wir wollen, dass
                    Deine Produkte sinnvoll sind und sich vor allem intuitiv – am
                    besten ohne Erklärung bedienen lassen. Daher gehören die
                    Schritte des wireframings über den klickbaren Prototypen bis
                    hin zum User-Testing zu unserem Hauptprogramm.
                </p>
            </div>
            <div>
                <ScrollAnchor id="design-thinking"></ScrollAnchor>
                <Circle
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                ></Circle>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="50"
                    data-sal-easing="ease-out"
                >
                    Design
                </h2>
                <hr
                    data-sal="slide-up"
                    data-sal-delay="75"
                    data-sal-easing="ease-out"
                />
                <p
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease-out"
                >
                    Wir machen nicht nur hübsch! Klar, das Endergebnis sieht bei
                    uns immer ästhetisch und ansprechend aus, aber unter Design
                    verstehen wir sehr viel mehr: Vom ersten Konzept bis zum
                    fertigen Design sind es viele Schritte. Beim Userresearch
                    definieren wir die wichtigsten Merkmale der Zielgruppe und
                    ihre Verbindung zum Produkt. In den sogenannten Customer
                    Journeys wird der Weg der Kunden mit allen Berührungspunkten
                    zur Marke aufgezeigt und in der Phase des
                    Userexperiencedesigns geformt. Das Screendesign bringt
                    letztlich Form und Funktion zusammen. In visuell
                    ansprechender Gestaltung werden Typografie, Farben und
                    Formen so verwendet, dass sie im Einklang mit Nutzung und
                    Marke stehen.
                </p>
            </div>
        </div>
    </StyledSection>
)
export default div
