import React from "react"

import StandardLayout from "../StandardLayout"
import SEO from "../Seo"
import HeadlineAndText from "../HeadlineAndText"
import ContactFooter from "../ContactFooter"
import FiftyFifty from "../layout/FiftyFifty"
import FiftyFifty2 from "../layout/FiftyFifty2"
import ServiceImage2 from "../ServiceImage2"
import ServicesTable from "../ServicesTable"

const ServicePage = (props) => (
    <StandardLayout>
        <SEO title={props.seo.title} keywords={[...props.seo.keywords]} />

        <ServiceImage2 />
        <HeadlineAndText
            h1={props.headlineAndText.headline}
            subline={props.headlineAndText.subline}
            body={props.headlineAndText.body1}
            body2={props.headlineAndText.body2}
        />
        <FiftyFifty
            headline1={props.serviceCategories1.concept.title}
            body1={props.serviceCategories1.concept.body}
            headline2={props.serviceCategories1.design.title}
            body2={props.serviceCategories1.design.body}
        />
        <FiftyFifty2
            headline1={props.serviceCategories2.developement.title}
            body1={props.serviceCategories2.developement.body}
            headline2={props.serviceCategories2.marketing.title}
            body2={props.serviceCategories2.marketing.body}
        />
        <ServicesTable content={props.servicesTable} />
        <ContactFooter mainline={props.footer.title} />
    </StandardLayout>
)

export default ServicePage
