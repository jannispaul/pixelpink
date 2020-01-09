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
    contact: "Digitalen MVP bauen und User überzeugen?",
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
                    mainline="Wir bauen digitale Produkte"
                    subline="user-centered und ohne Kompromisse in Berlin."
                />
                <HeroProject />
                <LogoWall
                    mainline=" ist ein Designstudio für digitale Produkte und Services.
                                Wir arbeiten mit großen Marken, KMUs, Startups und in Agenturen."
                />
                <ServicesIndex />
                <ContactFooter mainline={copy.contact} />
            </StandardLayout>
        )
    }
}

export default IndexPage
