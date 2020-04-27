import React from "react"
import ServicesPage from "../components/pages/ServicesPage"
import { ICONS } from "../theme/Icons"
import { LanguageContext, languages } from "../components/context/index"

const content = {
    seo: {
        title: "Services",
        keywords: [`services`, `pixelpink`, `angebot`],
    },

    headlineAndText: {
        headline: "Our service, your success",
        body1: `What do we do? To put it briefly: We help you find a suitable digital strategy! Our interdisciplinary expertise enables us to create custom concepts for our clients that users will love.`,
        body2: `We take an empathetic approach to design. This means that we always have your users' perspective in mind and apply such insights to all phases of your project. Our concept, design, development, and marketing services are interlinked and benefit from one another.`,
    },
    serviceCategories1: {
        concept: {
            title: "Concept",
            body:
                "The transformation process involved in digitalization can quickly become overwhelming. A clear concept is the foundation for your successful project, preventing misunderstanding and subsequent economic setbacks. That's why we work together with you to develop a digital strategy that suits you best. We analyze your operations and give you honest advice: From the optimization of internal processes to your brand's public image, there’s often room for improvement that we’d like to explore with you.",
        },
        design: {
            title: "Design",
            body:
                "We don't just make things pretty! Of course our final results are always aesthetic and appealing, but we believe there is much more to design than just looks: There are many steps between the initial concept and the finished design. With user research, we define the most important characteristics of your target audience and their relationship to your product. During the user experience design phase, we use customer journeys to identify the customer's path and points of contact with your brand. In the final stage, we unite form and function with a screen design. Our visually appealing designs combine typography, colors, and shapes to harmonize with your brand and product usability.",
        },
    },
    serviceCategories2: {
        developement: {
            title: "Development",
            body:
                "We also find the best technical solution for you, be it a custom content management system (CMS) or an online shop. If you’re interested in setting up a Wordpress blog, we’re happy to help, though for many \"simple\" websites we recommend trying out more modern and efficient options. We're big fans of using the JAMstack (Javascript, APIs, and Markup) approach to create static sites. This option comes with several advantages: For example, because the server doesn't have to regenerate them every time they’re accessed, static sites are faster and more secure. It goes without saying that all of our websites are responsive, meaning they function on different display screen sizes. Once development is finished, we can also take care of the site hosting for you so that you can focus more on what's really important to you.",
        },
        marketing: {
            title: "Marketing",
            body:
                "Want to reach a wider audience? Want to reach the right audience? It's important to us that your target audience finds you, and that's why we always optimize our websites for search engines (SEO). How can you attract even more potential customers (aka leads)? Social media and search engine marketing can make all the difference: With individual campaigns you can lead users straight to your website and increase sales conversions. We measure your success with Google Analytics and Tag Manager, adjusting the parameters for high-quality traffic to ensure the optimal cost/benefit ratio.",
        },
    },
    servicesTable: {
        mainline: "Service Overview",
        subline: "From Concept to Marketing",
        table: [
            {
                name: "Concept",
                icon: ICONS.TRIANGLE,
                services: [
                    "Heuristic Evaluation",
                    "Communication Strategy",
                    "Brand Identity",
                    "Market UX Audit",
                    "Service Design",
                    "Storytelling",
                    "User Research",
                    "UX Design",
                ],
            },
            {
                name: "Design",
                icon: ICONS.CIRCLE,
                services: [
                    "Branding and Logo",
                    "Design Systems",
                    "Pitch Decks",
                    "Product Design",
                    "Prototyping",
                    "UI Design",
                    "User Testing",
                    "Visual Design",
                    "Wireframing",
                ],
            },
            {
                name: "Development",
                icon: ICONS.SQUARE,
                services: [
                    "Frontend Development",
                    "Gatsby / React",
                    "Headless CMS",
                    "Quality Assurance Test",
                    "Responsive Design",
                    "Shopify",
                    "Webflow",
                    "Wordpress",
                    // "Sapper / Svelte",
                    // "Contentful",
                    // "Netlify-CMS",
                ],
            },
            {
                name: "Marketing",
                icon: ICONS.HEXAGONE,
                services: [
                    "Content Marketing",
                    "Display Ads",
                    "E-Mail Marketing",
                    "Google Webmaster Tools",
                    "Google Analytics",
                    "Intercomm",
                    "SEO",
                    "Search Engine Marketing",
                    "Social Media Marketing",
                ],
            },
        ],
    },
    footer: {
        title: "Curious? Get in touch with us.",
    },
}

const Services = (props) => (
    <LanguageContext.Provider value={languages.en}>
        <ServicesPage
            seo={content.seo}
            headlineAndText={content.headlineAndText}
            serviceCategories1={content.serviceCategories1}
            serviceCategories2={content.serviceCategories2}
            servicesTable={content.servicesTable}
            footer={content.footer}
        />
    </LanguageContext.Provider>
)

export default Services
