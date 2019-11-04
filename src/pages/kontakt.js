import React from "react"
// import { Link } from 'gatsby'
import H1AndText from "../components/H1AndText"
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
                <LogoMobile/>
                <ContactFooter mainline="Schreiben Sie uns, wir antworten asap!" />
                <SocialMedia
                    mainline="Ja wir stehen auf SM"
                    subline="Follow us!"
                />
            </StandardLayout>
        )
    }
}
export default IndexPage
