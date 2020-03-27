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

const Square = styled.div`
    width: 36px;
    height: 36px;
    background: var(--color-primary);
    margin-bottom: 20px;
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


const div = props => (
    <StyledSection >
        <div>
            <div>
                <ScrollAnchor id="strategisches-design"></ScrollAnchor>
                <Square data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in"></Square>
                <h2 data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease-in">
                    Entwicklung 
                    
                </h2>
                <hr data-sal="slide-up" data-sal-delay="75" data-sal-easing="ease-in"/>
                <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-in">
                    Auch technisch finden wir für Dich die beste Lösung: Sei es ein individuelles Content-Management-System (CMS), ein Online-Shop oder möchtest Du einen Wordpressblog? Auch den können wir für dich natürlich einrichten, wobei wir für viele „einfache Seiten“ mit Dir modernere und effizientere Wege einschlagen möchten. Wir sind Fans vom JAM-Stack (Javascript, APIs, Markup): Das sind statische Seiten mit vielen Vorteilen. Sie sind zum Beispiel sehr schnell und sicher, da sie nicht bei jedem Aufruf vom Server neu generiert werden müssen. Dass alle unsere Seiten responsive sind, also auf verschiedenen Display-Größen funktionieren, versteht sich bei uns von selbst. Und – wenn die Entwicklung dann abgeschlossen ist, können wir für Dich auch das Hosting übernehmen. So, dass Du Dich auf das konzentrieren kannst, was Dir wirklich wichtig ist. 
                </p>
            </div>
            <div>
                <ScrollAnchor id="design-thinking"></ScrollAnchor>
                <Hexagon data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in"></Hexagon>
                <h2 data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease-in">
                    Marketing
                </h2>
                <hr data-sal="slide-up" data-sal-delay="75" data-sal-easing="ease-in"/>
                <p data-sal="slide-up" data-sal-delay="100" data-sal-easing="ease-in">
                Mehr Menschen erreichen? Die richtigen Menschen erreichen? Uns ist es wichtig, dass eben diese Dich finden und deshalb achten wir darauf, dass unsere Websites für Suchmaschinen optimiert sind (SEO). Wie kann man noch mehr Leads (potentielle Kunden) generieren? Suchmaschinen- und Social-Media-Marketing machen es möglich. Mit individuellen Kampagnen kannst Du Deine Nutzer direkt zum Ziel führen und Deine Conversions steigern. Wir messen Deine Erfolge mit Google Analytics und dem Tag Manager und passen die Parameter für qualitativ hochwertigen Traffic an, damit das Kosten/Nutzen-Verhältnis am Ende auch stimmt. 
                </p>
            </div>
        </div>
    </StyledSection>
)
export default div
