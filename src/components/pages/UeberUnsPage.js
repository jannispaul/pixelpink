import React from "react"
import StandardLayout from "../StandardLayout"
import SEO from "../Seo"
import HeadlineAndText from "../HeadlineAndText"
import ContactFooter from "../ContactFooter"
import UberUnsImage from "../UberUnsImage"
import OurProcess from "../OurProcess"
import OurTools from "../OurTools"

import FiftyFiftyBlackIMGAboutUs from "../layout/FiftyFiftyBlackIMGAboutUs"

const UeberUnsPage = (props) => (
    <StandardLayout>
        <SEO title={props.seo.title} keywords={props.seo.keywords} />

        <UberUnsImage />
        <HeadlineAndText
            h1={props.headlineAndText1.mainline}
            subline={props.headlineAndText1.subline}
            body={props.headlineAndText1.copy}
        />
        <FiftyFiftyBlackIMGAboutUs
            h2={props.headlineAndText2.mainline}
            subline={props.headlineAndText2.subline}
            body={props.headlineAndText2.copy}
        />
        <HeadlineAndText
            h2={props.headlineAndText3.mainline}
            subline={props.headlineAndText3.subline}
            body={props.headlineAndText3.copy}
        >
            <OurProcess></OurProcess>
        </HeadlineAndText>
        <HeadlineAndText
            h2={props.headlineAndText4.mainline}
            subline={props.headlineAndText4.subline}
            body={props.headlineAndText4.copy}
        >
            <OurTools></OurTools>
        </HeadlineAndText>
        <ContactFooter mainline={props.footer} />
    </StandardLayout>
)

export default UeberUnsPage
