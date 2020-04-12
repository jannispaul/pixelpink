import React from "react"

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"

const NotFoundPage = () => (
    <StandardLayout>
        <SEO title="404: Nicht gefunden"/>
        <h1>Diese Seite konnte leider nicht gefunden werden.</h1>
    </StandardLayout>
)

export default NotFoundPage
