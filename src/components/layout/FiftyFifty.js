import React from "react"
import styled from "styled-components"
import ScrollAnchor from "../../components/ScrollAnchor"

const StyledSection = styled.div`
    width: 100%;
    padding: var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
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
                <Triangle></Triangle>
                <h2>
                    Strategisches <br />
                    Design
                </h2>
                <hr />
                <p>
                    Wo drückt denn der Schuh? Erweisen sich bestimme Merkmale
                    Ihres Produktes als unverständlich, heben spätestens Ihre
                    Nutzer und Kunden mahnend den Finger. Um diesem
                    wirtschaftlichen Misserfolg vorzubeugen bildet die
                    Ursachenforschung und ein fundamentales Konzept für uns den
                    Grundstein für Ihr erfolgreiches Projekt. Wir wollen, dass
                    Ihre Produkte sinnvoll sind und sich vor allem intuitiv – am
                    besten ohne Erklärung bedienen lassen. Daher gehören die
                    Schritte des Wireframing über den klickbaren Prototypen bis
                    hin zum User-Testing zu unserem Hauptprogramm.
                </p>
                <p>
                    Steht’s mit Ihrer Persona-Gruppe im Fokus entwickeln wir
                    kundenzentrierte Mensch-Maschine Konzepte und
                    Interatkionsmuster in strategischen Designprozessen.
                </p>
            </div>
            <div>
                <ScrollAnchor id="design-thinking"></ScrollAnchor>
                <Circle></Circle>
                <h2>
                    Design <br />
                    Thinking
                </h2>
                <hr />
                <p>
                    Es geht nicht nur um ein Produkt. Es ist die Geschichte, von
                    Anfang bis zum Ende erzählt, welche Ihren Nutzern und Kunden
                    im Kopf bleibt. Wir sprechen von integrierten Services,
                    welche sich in den alltäglichen natürlichen Ablauf
                    integrieren und Ihre Geschichte simpel und charmant
                    erzählen. Wir ergründen Kundenbedürfnisse und verorten diese
                    einem ganzheitlichen Ansatz in Ihrer Customer Journey.
                </p>

                <p>
                    Das Auge isst mit! Neben der Service-Einordnung und der
                    Konzeption ist Branding und charmantes Design das
                    ausschlaggebende Argument für Ihre Marke oder Produkt. Wir
                    treiben Ihr Kommunikationskonzept voran und entwicklen
                    visuell ästhetische Designs.
                </p>
            </div>
        </div>
    </StyledSection>
)
export default div
