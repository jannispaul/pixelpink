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
        <CookieNotice />

        <H1Header
            mainline={props.intro.mainline}
            subline={props.intro.subline}
        />

        <HeroProject
            title={props.heroProject.title}
            linkText={props.heroProject.linkText}
            link={props.heroProject.link}
        />
        <LogoWall
            headline={props.logoWall.title}
            copy={props.logoWall.copy}
            linkText={props.logoWall.linkText}
            link={props.logoWall.link}
        />
        <ServicesIndex
            mainline={props.services.mainline}
            subline={props.services.subline}
            copy={props.services.copy}
            service1={props.services.service1}
            service2={props.services.service2}
            service3={props.services.service3}
            service4={props.services.service4}
            linkText={props.services.linkText}
            link={props.services.link}
        />
        <ContactFooter mainline={props.footer} />
    </StandardLayout>
)

export default IndexPage
