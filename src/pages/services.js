import React from "react"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1AndText from "../components/H1AndText"
import ContactFooter from "../components/ContactFooter"
import FiftyFifty from "../components/layout/FiftyFifty"
import FiftyFiftyBlackIMG from "../components/layout/FiftyFiftyBlackIMG"
import LogoMobile from "../components/LogoMobile"

class ServicePage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                 <LogoMobile/>
                <H1AndText
                    mainline="Das Erlebnis als Erfolgsfaktor"
                    subline="Wir helfen Ihnen in die Digitalisierung"
                    body={[`Wir sind Spezialisten für digitales Produktdesign, kreieren integrierte Services, erschaffen User Experience Konzepte und bilden visuelle Gestalt. Egal ob App, Website oder E-Commerce Store: Wir entwickeln individuell designte Lösungen. Stets originell, immer durchdacht und maßgeschneidert entsprechend Ihrer Anforderungen und den Bedürfnissen Ihrer Kunden. `]}

                    body2={[`Das Erlebnis als Erfolgsfaktor. In unseren übersättigten Märkten und dem stetigen Überangebot sehen wir das Potenzial der Differenzierung und Abgrenzung in der Gestaltung eines einzigartigen Gesamtergebnisses. Der typische Nutzer ist meist ungeduldig. Reizüberflutung und Ablenkung sind keine Seltenheit heutzutage. Daher wollen wir den Fokus für Ihr Produkt steigern und das wesentliche kräftigen. Dies gelingt uns da wir einen minimalistischen, funktionalen Design-Ansatz verfolgen und praktizieren. Die folgenden drei Kernbereiche stellen eine bewiesen sinnvolle Strukturplanung Ihrer Möglichkeiten dar:`]}
                />
                <FiftyFifty/>
                <FiftyFiftyBlackIMG/>
                <ContactFooter mainline="Wo drückt der Schuh? Wir helfen!" />
            </StandardLayout>
        )
    }
}
export default ServicePage
