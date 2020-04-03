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
    contact: "Bereit digital durchzustarten?",
}

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="DesignStudio Berlin"
                    keywords={[`pixelpink`, `design studio`, `berlin`, `werbeagentur`, `marketingagentur`, `design`]}
                />
                <CookieNotice />
                <LogoMobile />
                <H1Header
                    mainline="Wir gestalten und entwickeln digitale Lösungen,"
                    subline="die Deine Kunden lieben."
                />
                <HeroProject />
                <LogoWall/>
                <ServicesIndex />
                <ContactFooter mainline={copy.contact} />
            </StandardLayout>
        )
    }
}

export default IndexPage
