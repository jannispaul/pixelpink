import React from "react"
import IndexPage from "../components/pages/IndexPage"
import { LanguageContext, languages } from "../components/context/index"

const content = {
    seo: {
        title: "Design Studio Berlin",
        keywords: [
            `pixelpink`,
            `design studio`,
            `berlin`,
            `advertising agency`,
            `marketing agency`,
            `design`,
        ],
    },
    cookieNotice: {
        copy: "We use cookies to improve your browsing experience.",
        linkText: "Learn more",
        cta: "🍪Got it!",
    },
    intro: {
        mainline: "We create and develop digital solutions",
        subline: "that your users love",
    },
    heroProject: {
        title: "Take a look at our selected work",
        linkText: "Discover here",
        link: "/en/projekte",
    },
    logoWall: {
        title:
            " is a Berlin-based design studio specialized in digital media and technology.",
        copy:
            "We create landing pages, websites for corporations and e-commerce businesses, marketing campaigns, and app designs. We work with start-ups, design agencies, and major companies. Our strengths lie in conceptualization, design, frontend development, and digital marketing. From the first point of contact to product launch and beyond, we support our customers with sound guidance and advice.",
        linkText: "Get to know us a bit better",
        link: "/en/ueber-uns",
    },
    services: {
        mainline: "Our Services",
        subline: "no mass production, only original designs",
        copy:
            "So, what do we have to offer? Simply put, we help you find the digital strategy that works best for you! Our interdisciplinary expertise enables us to create custom-tailored solutions that are sure to excite your users.",
        service1: {
            title: "Concept",
            copy: "We develop the right digital strategy.",
            link: "/services#strategisches-design",
        },
        service2: {
            title: "Design",
            copy: "We design to unify branding and usability.",
            link: "/services#design-thinking",
        },
        service3: {
            title: "Development",
            copy: "We find technical solutions that work for you.",
            link: "/services#entwicklung",
        },
        service4: {
            title: "Marketing",
            copy: "We introduce your product to the public.",
            link: "/services#marketing",
        },
        linkText: "Learn more about our services",
        link: "/en/services#alle-services",
    },
    footer: {
        title: "Are you ready to go digital?",
    },
}

const Index = (props) => (
    <LanguageContext.Provider value={languages.en}>
        <IndexPage
            title={content.seo.title}
            keywords={content.seo.keywords}
            intro={content.intro}
            heroProject={content.heroProject}
            logoWall={content.logoWall}
            services={content.services}
            footer={content.footer.title}
        ></IndexPage>
    </LanguageContext.Provider>
)

export default Index
