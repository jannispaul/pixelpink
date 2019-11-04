import React from "react"
import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1Header from "../components/H1Header"
import ContactFooter from "../components/ContactFooter"
import HeroProject from "../components/HeroProject"
import ServicesIndex from "../components/ServicesIndex"
import LogoWall from "../components/LogoWall"
import LogoMobile from "../components/LogoMobile"


let copy = {
    contact: "Let’s talk business. Schreib uns jetzt!",
}

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                {/* <ComponentName></ComponentName> */}
                <LogoMobile/>
                <H1Header
                    mainline="Wir machen digitales Produktdesign"
                    subline="ohne Schnickschnack in Berlin"
                />
                <HeroProject />
                <LogoWall 
                    mainline=" ist ein Designstudio für digitale Produkte und Services.
                                Wir arbeiten mit großen Marken, KMUs, Startups und in Agenturen."
                />
                <ServicesIndex/>
                <ContactFooter mainline={copy.contact} />
            </StandardLayout>
        )
    }
}

export default IndexPage
