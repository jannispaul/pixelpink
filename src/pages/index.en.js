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
    cookieNotice: {
        copy: "Wir nutzen Cookies um Dein Erlebnis noch besser zu machen.",
        linkText: "Mehr erfahren",
        cta: "🍪Alles klar!",
    },
    intro: {
        mainline: "We develop and create digital solutions",
        subline: "die Deine Kunden lieben",
    },
    heroProject: {
        title: "Eine kleine Auswahl unserer Arbeiten",
        linkText: "Alle Projekte ansehen",
    },
    logoWall: {
        title:
            "ist ein auf Design und Technologie spezialisiertes Studio für digitale Medien in Berlin.",
        copy:
            "Wir kreieren Landingpages, Corporate- und E-Commerce-Websites, Appdesigns und Marketing-Kampagnen, arbeiten in Start-Ups, Agenturen und für große Unternehmen. Unsere Stärken liegen in den Bereichen Konzept, Design, Entwicklung und digitales Marketing. Von der ersten Anfrage bis über den Launch hinaus stehen wir unseren Kunden beratend und auf Augenhöhe zur Seite.",
        linkText: "Mehr über uns erfahren",
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
        mainline={content.intro.mainline}
        subline={content.intro.subline}
        projectTitle={content.heroProject.title}
        linkText={content.heroProject.linkText}
        headline={content.logoWall.title}
        copy={content.logoWall.copy}
        link={content.logoWall.linkText}
        footer={content.footer.title}
    ></IndexPage>
)

export default Index
