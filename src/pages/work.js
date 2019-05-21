import React from "react"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1Header from "../components/H1Header"
import ContactFooter from "../components/ContactFooter"

class IndexPage extends React.Component {
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`gatsby`, `application`, `react`]}
                />
                <H1Header
                    mainline="Eine selektierte Auswahl unserer Arbeiten"
                    subline="made with Love for Friends"
                />
                <ContactFooter mainline="Sind Sie bereit digital durchzustarten?" />
            </StandardLayout>
        )
    }
}
export default IndexPage
