import React from "react"
import ServicesPage from "../components/pages/ServicesPage"
// import Icon from "../components/layout/Icon"
import { ICONS } from "../theme/Icons"

const content = {
    seo: {
        title: "Services",
        keywords: [`services`, `pixelpink`, `angebot`],
    },

    headlineAndText: {
        headline: "Unser Service für Deinen Erfolg",
        body1: `Was tun wir? In einem Satz: Wir helfen Dir, eine passende Digital-Strategie zu finden! Unsere interdisziplinären Kompetenzen ermöglichen es uns, für unsere Kunden besondere Konzepte zu kreieren, von denen ihre Nutzer begeistert sind.`,
        body2: `Wir verfolgen einen emphatischen Design-Ansatz. Damit haben wir immer die Sicht Deiner Nutzer im Blick und lassen unsere diesbezüglichen Erkenntnisse in allen Phasen Deines Projektes einfließen. Unsere Services Konzeption, Design, Entwicklung und Marketing sind so miteinander verbunden und profitieren durch den Austausch voneinander.`,
    },
    serviceCategories1: {
        concept: {
            title: "Konzeption",
            body:
                "Der Transformationsprozess der Digitalisierung kann schnell überwältigend wirken. Ein klares Konzept bildet den Grundstein für Dein erfolgreiches Projekt und beugt Unverständlichkeiten und somit wirtschaftlichem Misserfolg vor. Deshalb erarbeiten wir gemeinsam mit Dir die für Dich passende Digital-Strategie. Wir analysieren Deine Abläufe und beraten Dich ehrlich: Von der Optimierung interner Prozesse bis zum Außenauftritt der Marke gibt es häufig großes Verbesserungspotential, das wir mit Dir nutzen möchten.",
        },
        design: {
            title: "Design",
            body:
                "Wir machen nicht nur hübsch! Klar, das Endergebnis sieht bei uns immer ästhetisch und ansprechend aus, aber unter Design verstehen wir sehr viel mehr: Vom ersten Konzept bis zum fertigen Design sind es viele Schritte. Beim Userresearch definieren wir die wichtigsten Merkmale der Zielgruppe und ihre Verbindung zum Produkt. In den sogenannten Customer Journeys wird der Weg der Kunden mit allen Berührungspunkten zur Marke aufgezeigt und in der Phase des Userexperiencedesigns geformt. Das Screendesign bringt letztlich Form und Funktion zusammen. In visuell ansprechender Gestaltung werden Typografie, Farben und Formen so verwendet, dass sie im Einklang mit Nutzung und Marke stehen.",
        },
    },
    serviceCategories2: {
        developement: {
            title: "Entwicklung",
            body:
                "Auch technisch finden wir für Dich die beste Lösung: Sei es ein individuelles Content-Management-System (CMS), ein Online-Shop oder möchtest Du einen Wordpressblog? Auch den können wir für Dich natürlich einrichten, wobei wir für viele „einfache Seiten“ mit Dir modernere und effizientere Wege einschlagen möchten. Wir sind Fans vom JAM-Stack (Javascript, APIs, Markup): Das sind statische Seiten mit vielen Vorteilen. Sie sind zum Beispiel sehr schnell und sicher, da sie nicht bei jedem Aufruf vom Server neu generiert werden müssen. Dass alle unsere Seiten responsiv sind, also auf verschiedenen Display-Größen funktionieren, versteht sich bei uns von selbst. Und – wenn die Entwicklung dann abgeschlossen ist, können wir für Dich auch das Hosting übernehmen. So, dass Du Dich auf das konzentrieren kannst, was Dir wirklich wichtig ist.",
        },
        marketing: {
            title: "Marketing",
            body:
                "Mehr Menschen erreichen? Die richtigen Menschen erreichen? Uns ist es wichtig, dass Deine Zielgruppe Dich findet und deshalb achten wir darauf, unsere Websites für Suchmaschinen zu optimieren (SEO). Wie kann man noch mehr Leads (potentielle Kunden) generieren? Suchmaschinen- und Social-Media-Marketing machen es möglich: Mit individuellen Kampagnen kannst Du Deine Nutzer direkt zum Ziel führen und Deine Conversions steigern. Wir messen Deine Erfolge mit Google Analytics und dem Tag Manager und passen die Parameter für qualitativ hochwertigen Traffic an, damit das Kosten/Nutzen-Verhältnis am Ende stimmt.",
        },
    },
    servicesTable: {
        mainline: "Übersicht aller Leistungen",
        subline: "Von Konzept bis Marketing",
        table: [
            {
                name: "Konzeption",
                icon: ICONS.TRIANGLE,
                services: [
                    "Heuristische Evaluation",
                    "Kommunikationsstrategie",
                    "Markenidentität",
                    "Market UX Audit",
                    "Service-Design",
                    "Storytelling",
                    "User-Research",
                    "UX-Design",
                ],
            },
            {
                name: "Design",
                icon: ICONS.CIRCLE,
                services: [
                    "Branding + Logo",
                    "Design-Systems",
                    "Pitch-Decks",
                    "Product-Design",
                    "Prototyping",
                    "UI-Design",
                    "User-Testing",
                    "Visual-Design",
                    "Wireframing",
                ],
            },
            {
                name: "Entwicklung",
                icon: ICONS.SQUARE,
                services: [
                    "Frontend-Development",
                    "Gatsby / React",
                    "Headless-CMS",
                    "Quality Assurance Test",
                    "Responsive Design",
                    "Shopify",
                    "Webflow",
                    "Wordpress",
                    // "Sapper / Svelte",
                    // "Contentful",
                    // "Netlify-CMS",
                ],
            },
            {
                name: "Marketing",
                icon: ICONS.HEXAGONE,
                services: [
                    "Content Marketing",
                    "Display Ads",
                    "E-Mail Marketing",
                    "Google Webmaster Tools",
                    "Google Analytics",
                    "Intercomm",
                    "SEO",
                    "Search Engine Marketing",
                    "Social Media Marketing",
                ],
            },
        ],
    },
    footer: {
        title: "Neugierig geworden? Melde Dich bei uns.",
    },
}

const Services = (props) => (
    <ServicesPage
        seo={content.seo}
        headlineAndText={content.headlineAndText}
        serviceCategories1={content.serviceCategories1}
        serviceCategories2={content.serviceCategories2}
        servicesTable={content.servicesTable}
        footer={content.footer}
    />
)

export default Services
