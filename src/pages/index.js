import React from "react"
import IndexPage from "../components/pages/IndexPage"
const content = {
    seo: {
        title: "Design Studio Berlin",
        keywords: [
            `pixelpink`,
            `design studio`,
            `berlin`,
            `advertising agency`,
            `marketing agency`,
            `design`,
        ],
    },
    intro: {
        mainline: "Wir gestalten und entwickeln Lösungen",
        subline: "die Deine Kunden lieben",
    },
    heroProject: {
        title: "Eine kleine Auswahl unserer Arbeiten",
        linkText: "Alle Projekte ansehen",
        link: "/projekte",
    },
    logoWall: {
        title:
            "ist ein auf Design und Technologie spezialisiertes Studio für digitale Medien in Berlin.",
        copy:
            "Wir kreieren Landingpages, Corporate- und E-Commerce-Websites, Appdesigns und Marketing-Kampagnen, arbeiten in Start-Ups, Agenturen und für große Unternehmen. Unsere Stärken liegen in den Bereichen Konzept, Design, Entwicklung und digitales Marketing. Von der ersten Anfrage bis über den Launch hinaus stehen wir unseren Kunden beratend und auf Augenhöhe zur Seite.",
        linkText: "Mehr über uns erfahren",
        link: "/ueber-uns",
    },
    services: {
        mainline: "Unsere Services",
        subline: "keine Massenware, nur originelles Design",
        copy:
            "Was tun wir? In einem Satz: Wir helfen Dir, eine passende Digital-Strategie zu finden! Unsere interdisziplinären Kompetenzen ermöglichen es uns, für unsere Kunden besondere Konzepte zu kreieren, von denen die Nutzer begeistert sind.",
        service1: {
            title: "Konzeption",
            copy: "Wir erarbeiten eine passende Digital-Strategie.",
            link: "/services#strategisches-design",
        },
        service2: {
            title: "Design",
            copy: "Wir gestalten für den Einklang von Nutzung und Marke.",
            link: "/services#design-thinking",
        },
        service3: {
            title: "Entwicklung",
            copy: "Wir finden für Dich die technisch beste Lösung.",
            link: "/services#entwicklung",
        },
        service4: {
            title: "Marketing",
            copy: " Wir bringen Dein Produkt in den Markt.",
            link: "/services#marketing",
        },
        linkText: "Alle Services entdecken",
        link: "/services#alle-services",
    },
    footer: {
        title: "Bist Du bereit, digital durchzustarten?",
    },
}

const Index = (props) => (
    <IndexPage
        title={content.seo.title}
        keywords={content.seo.keywords}
        cookieNotice={content.cookieNotice}
        intro={content.intro}
        heroProject={content.heroProject}
        logoWall={content.logoWall}
        services={content.services}
        footer={content.footer.title}
    ></IndexPage>
)

export default Index
