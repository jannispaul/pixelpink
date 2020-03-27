import React from "react"
import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1Header from "../components/H1Header"
import ContactFooter from "../components/ContactFooter"
import HeroProject from "../components/HeroProject"
import ServicesIndex from "../components/ServicesIndex"
import LogoWall from "../components/LogoWall"
import LogoMobile from "../components/LogoMobile"
import CookieNotice from "../components/CookieNotice"

let copy = {
    contact: "Sind Sie bereit digital durchzustarten?",
}

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <CookieNotice />
                <LogoMobile />
                <H1Header
                    mainline="Wir gestalten und entwickeln digitale Lösungen,"
                    subline="die Deine Kunden lieben."
                />
                <HeroProject />
                <LogoWall
                    mainline=" ist ein auf Design und Technologie spezialisiertes Studio für digitale Medien in Berlin. Wir arbeiten mit großen Marken, KMUs, Startups, in Agenturen und kreieren Landingpages, Corporate und E-Commerce-Websites, Appdesigns und Marketing-Kampagnen."
                />
                <ServicesIndex />
                <ContactFooter mainline={copy.contact} />
            </StandardLayout>
        )
    }
}

export default IndexPage
