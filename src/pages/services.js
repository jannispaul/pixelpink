import React from "react"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import HeadlineAndText from "../components/HeadlineAndText"
import ContactFooter from "../components/ContactFooter"
import FiftyFifty from "../components/layout/FiftyFifty"
import FiftyFifty2 from "../components/layout/FiftyFifty2"
import ServiceImage2 from "../components/ServiceImage2"
import ServicesTableNew from "../components/ServicesTableNew"

class ServicePage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Services"
                    keywords={[`services`, `pixelpink`, `angebot`]}
                />

                <ServiceImage2 />
                <HeadlineAndText
                    h1="Unser Service für Deinen Erfolg"
                    subline="Wir helfen Dir in die Digitalisierung"
                    body={[
                        `Was tun wir? In einem Satz: Wir helfen Dir, eine passende Digital-Strategie zu finden! Unsere interdisziplinären Kompetenzen ermöglichen es uns, für unsere Kunden besondere Konzepte zu kreieren, von denen ihre Nutzer begeistert sind.`,
                    ]}
                    body2={[
                        `Das Erlebnis als Erfolgsfaktor: In unseren übersättigten Märkten und dem stetigen Überangebot sehen wir das Potenzial der Differenzierung und Abgrenzung in der Gestaltung eines einzigartigen, hollistischen Erlebnis. Der typische Nutzer ist meist ungeduldig. Reizüberflutung und Ablenkung sind keine Seltenheit heutzutage. Daher wollen wir den Fokus für Dein Produkt steigern und Das wesentliche kräftigen. Dies gelingt uns, da wir einen minimalistischen, funktionalen Design-Ansatz verfolgen und praktizieren. Die folgenden vier Kernbereiche stellen eine bewiesen sinnvolle Strukturplanung Deiner Möglichkeiten dar:`,
                    ]}
                />
                <FiftyFifty />
                <FiftyFifty2 />
                <ServicesTableNew />
                <ContactFooter mainline="Neugierig geworden? Melde Dich bei uns." />
            </StandardLayout>
        )
    }
}
export default ServicePage
