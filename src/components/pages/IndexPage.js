import React from "react"
import StandardLayout from "../StandardLayout"
import SEO from "../Seo"
import H1Header from "../H1Header"
import ContactFooter from "../ContactFooter"
import HeroProject from "../HeroProject"
import ServicesIndex from "../ServicesIndex"
import LogoWall from "../LogoWall"
import CookieNotice from "../CookieNotice"

const IndexPage = (props) => (
    <StandardLayout>
        <SEO title={props.title} keywords={[...props.keywords]} />
        <CookieNotice
            copy={props.cookieNotice.copy}
            linkText={props.cookieNotice.linkText}
            cta={props.cookieNotice.cta}
        />

        <H1Header mainline={props.mainline} subline={props.subline} />
        <HeroProject
            projectTitle={props.projectTitle}
            linkText={props.linkText}
        />
        <LogoWall
            headline={props.headline}
            copy={props.copy}
            link={props.link}
        />
        <ServicesIndex />
        <ContactFooter mainline={props.footer} />
    </StandardLayout>
)

export default IndexPage
