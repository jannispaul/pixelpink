import React from "react"
import SocialMedia from "../components/SocialMedia"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import ContactFooter from "../components/ContactFooter"
import LogoMobile from "../components/LogoMobile"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <LogoMobile />
                <ContactFooter mainline="Auf der Suche nach innovativen Konzepten?" />
                <SocialMedia
                    mainline="Noch nicht genug?"
                    subline="Let's be friends."
                />
            </StandardLayout>
        )
    }
}
export default IndexPage
