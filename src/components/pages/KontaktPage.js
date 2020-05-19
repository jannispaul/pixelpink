import React from "react"
import SocialMedia from "../SocialMedia"
import StandardLayout from "../StandardLayout"
import SEO from "../Seo"
import ContactFooter from "../ContactFooter"

import UberUnsImageGrid from "../UberUnsImageGrid"

const IndexPage = (props) => (
    <StandardLayout>
        <SEO title={props.seo.title} keywords={[...props.seo.keywords]} />
        <ContactFooter mainline={props.footer.title} />
        <SocialMedia
            mainline={props.socialMedia.mainline}
            subline={props.socialMedia.subline}
        />
        <UberUnsImageGrid></UberUnsImageGrid>
    </StandardLayout>
)

export default IndexPage
