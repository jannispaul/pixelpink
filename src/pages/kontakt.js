import React from "react"
// import { Link } from 'gatsby'
import H1AndText from "../components/H1AndText"
import SocialMedia from "../components/SocialMedia"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import ContactFooter from "../components/ContactFooter"
import LogoMobile from "../components/LogoMobile"
import UberUnsImageGrid from "../components/UberUnsImageGrid"



class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <LogoMobile/>
                <ContactFooter mainline="Auf der Suche nach innovativen Konzepten?" />
                <SocialMedia
                    mainline="Riskieren Sie ein Blick hinter die Kulissen"
                    subline="Let´s e-meet and be friends."
                />
                <UberUnsImageGrid></UberUnsImageGrid>
            </StandardLayout>
        )
    }
}
export default IndexPage
