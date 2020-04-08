import React from "react"
import SocialMedia from "../components/SocialMedia"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import ContactFooter from "../components/ContactFooter"

import UberUnsImageGrid from "../components/UberUnsImageGrid"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO title="Kontakt" keywords={[`kontakt`, `pixelpink`]} />

                <ContactFooter mainline="Auf der Suche nach innovativen Konzepten?" />
                <SocialMedia
                    mainline="Noch nicht genug?"
                    subline="Let's be friends"
                />
                <UberUnsImageGrid></UberUnsImageGrid>
            </StandardLayout>
        )
    }
}
export default IndexPage
