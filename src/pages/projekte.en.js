import React from "react"
import ProjektePage from "../components/pages/ProjektePage"
import { LanguageContext, languages } from "../components/context/index"

const content = {
    seo: {
        title: "Projects",
        keywords: [`projects`, `pixelpink`, `work`, `references`, `clients`],
        description: "Eine kleine Auswahl der Arbeiten von PixelPink",
    },
    h1Header: {
        mainline: "A small selection of PixelPink projects",
        subline: "from websites to app designs",
    },
    projects: {
        thePioneer: {
            images: undefined,
            imgAltText: [
                "ThePioneer Landingpage Website inside Macbook and iPhone",
                "ThePioneer by Mediapioneer Logo ",
                "ThePioneer Landingpage Website inside iPad",
                "ThePioneer Landingpage Website displayed in Apple HDR Display",
                "ThePioneer Landingpage Website inside a Safari Browser Mockup",
                "ThePioneer Landingpage Website from Ideation to Launch Variations of Webdesign",
            ],
            company: "ThePioneer",
            title: "Gabor Steingart’s media startup, ThePioneer.",
            link: "https://join.thepioneer.de",
            linkText: "Join.ThePioneer.de",
            description:
                "We designed and developed a converting landing page to launch the media startup, ThePioneer. Highlighting newly released content, this one-pager offers an exclusive look into the company’s unique mission and vision. The page design is 100% ThePioneer, impressing site visitors with its video content and animations.",
            services: ["Concept", "UX & UI Design", "Gatsby / React"],
        },
        thePioneerLP: {
            images: undefined,
            imgAltText: [
                "Uberstunde inside iPhone in a dark room",
                "Uberstunde by Mediapioneer Logo ",
                "Uberstunde Website inside iMac",
                "Uberstunde Podcast Mockup",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
                "Uberstunde Gerhard Schröder Podcast",
            ],
            company: "The Pioneer",
            title: "Landingpages for Podcasts and Conversion",
            link: "https://www.thepioneer.de/podcasts",
            linkText: "www.thepioneer.de/podcasts",
            description:
                "We designed and developed several landing pages for the media start-up 'ThePioneer': For each of the podcasts The Armericans, Wall Street Weekly and Überstunde we created a website spark the users interest and present the streaming offer. For the launch of 'ThePioneer' we created a one-pager, that gives you an insight into the background and unique projects of the company.",
            services: ["Brand Identity ", "UX & UI Design", "Gatsby / React"],
        },
        lbMarketing: {
            images: undefined,
            imgAltText: ["Lara Bothur Marketing Homepage Website Mockup", "Lara Bothur Marketing Website Portfolio Pages Mockup", "Lara Bothur Marketing Website in responsive view mockup", "Lara Bothur Marketing Businesscard Design", "Lara Bothur Marketing multiple Subpages Website mockup"],
            company: "Lara Bothur Marketing",
            title: "Personal Website for Marketing consultant",
            description: "For Lara Bothur, working as freelance marketing consultant we designed a personal and unnique brand experience. The website is reflecting her values, highlighting services and emphasing her expertise combining marketing and business psychology.",
            link: "https://www.larabothur.de",
            linkText: "www.larabothur.de",
            services: ["Brand Identity", "UX & UI Design", "Wordpress Development"],
        },
        musikVersicherung: {
            images: undefined,
            imgAltText: [
                "Musikversicherung.com displayed in laptop",
                "Layout of 2 pages of Musikversicherung.com",
                "Mobile version of Musikversichernug.com",
            ],
            company: "B!-Das Versicherungsbüro",
            title: "Podcasts and stories from today's America",
            description:
                "The project involved a relaunch of the site, which previously ran on Wordpress. The new version includes an improved and dynamic design, stronger SEO and very good performance. In addition the site scores with a clear navigation concept, strong colors, various interactive inquiry forms and a static rating system.",
            link: "http://musikversicherung.com/",
            linkText: "www.musikversicherung.com",
            services: ["Brand Identity", "UX & UI Design", "Eleventy / JS"],
        },
        fuelcast: {
            images: undefined,
            imgAltText: [
                "Fuelcast Application Dashboard",
                "Fuelcast App Icon Logo",
                "Fuelcast Application Profile and Scan-Screen",
                "Fuelcast Application design screenflow",
                "Fuelcast Application technical design specifications",
                "Fuelcast Application in front of a container ship",
                "Fuelcast Founder Jurek Herwig at Entrepreneur First Pitch Event in London 2019",
                "Felix Lebedinzew, Mattias Nilsson, Jurek Herwig at Meeting",
            ],
            company: "Fuelcast",
            title:
                "Sustainability and efficiency in the cargo shipping industry",
            description:
                "Fuelcast is a mobile app that uses artificial intelligence to streamline fuel and energy management in the cargo shipping industry. We worked with Fuelcast founders to develop the startup’s brand concept and corporate image. To establish a uniform brand and product identity across several touch points, we designed the mobile app interface, as well as pitch and investor decks.",
            link: "https://fuelcast.co/",
            linkText: "www.fuelcast.co",
            services: [
                "Branding & Logo",
                "UX & UI Design",
                "Design-System",
                "Pitch-Deck",
            ],
        },
        mediapioneer: {
            images: undefined,
            imgAltText: [
                "mediapioneer Website inside white macbook",
                "mediapioneer logo",
                "mediapioneer Website inside white iPad",
                "Gabor Steingarts mediapioneer platform inside white iPad",
                "mediapioneer Website wireframes and design iterations",
            ],
            company: "Mediapioneer",
            title: "Gabor Steingart’s vision for journalism",
            description:
                "To effectively communicate the company’s commitment to democratized journalism, Gabor Steingart’s MediaPioneer needed a simple and flexible website. The Wordpress site and corresponding content management system we set up lets the fast-growing MediaPioneer team manage webpages and content independently. Using striking colors, we established a brand identity that site visitors are sure to remember.",
            link: "https://mediapioneer.com/",
            linkText: "www.mediapioneer.com",
            services: ["UX & UI Design", "Visual Design", "Wordpress"],
        },
        qvsta: {
            images: undefined,
            imgAltText: [
                "QVSTA website inside a black iMac showing Model booking process",
                "QVSTA Logo",
                "QVSTA logo versions",
                "QVSTA website dashboard",
                "QVSTA website login-screen, briefing-screen and dashboard",
                "QVSTA website inside iPad in front of female model",
                "QVSTA website wireframes and design iterations",
                "QVSTA design system elements",
            ],
            company: "Qvsta",
            title: "Revolutionizing the Fashion & Tech industry.",
            description:
                "In the fashion industry, it's still common practice to manually search for models and book them via e-mail. QVSTA helps digitalize the fashion industry by streamlining this process, enabling platform users to search, book, and manage talent all in one place. Together with the QVSTA team, we developed a modern brand identity and a component-based design system that builds the foundation for all QVSTA digital products.",
            link: "https://qvsta.com/",
            linkText: "www.qvsta.com",
            services: [
                "Branding & Logo",
                "Prototyping",
                "Design-System",
                "UX & UI Design",
            ],
        },

        arztpraxisSchulzendorf: {
            images: undefined,
            imgAltText: [
                "Arztpraxis schulzendorf website inside macpro",
                "Arztpraxis schulzendorf logo",
                "Arztpraxis schulzendorf logo variations",
                "Arztpraxis schulzendorf color palette",
                "Arztpraxis schulzendorf website inside iphone and ranking on first page on google",
                "Arztpraxis schulzendorf peggy niederhäusern examining a child and the entrance to the practice",
            ],
            company: "Arztpraxis-Schulzendorf",
            title: "Modern communication for a medical practice",
            description:
                "We accompanied this newly-founded medical practice in Schulzendorf, Germany from concept to marketing, starting with a memorable logo and modern visual identity. The main point of contact with patients is the practice’s website, which is simple, accessible, and easily findable, thanks to its high search ranking on Google and Jameda.",
            link: "https://arztpraxis-schulzendorf.de/",
            linkText: "www.arztpraxis-schulzendorf.de",
            services: [
                "Communication Strategy",
                "Branding & Logo",
                "UX & UI Design",
                "Gatsby / React",
                "SEO / Content Marketing",
            ],
        },
        dieMasterarbeit: {
            images: undefined,
            imgAltText: [
                "Die-Masterarbeit.com website inside a blue Windows computer",
                "Die-Masterarbeit.com logo",
                "Die-Masterarbeit.com website inside two iPhones",
                "Die-Masterarbeit.com website showing homepage, contact and company profile screens",
                "Die-Masterarbeit.com styleguide and design system elements",
            ],
            company: "Die-Masterarbeit.de",
            title: "Connecting students with businesses",
            description:
                "During their strategic reorganization and expansion, we helped Partner der Wissenschaft UG with the design and relaunch of their two job search portals, Die-Bachelorarbeit.de and Die-Masterarbeit.de. Our collaboration resulted in a practical platform focused on success-driven solutions, for both students and businesses looking for the perfect match.",
            link: "https://www.die-masterarbeit.de",
            linkText: "www.die-masterarbeit.de",
            services: [
                "Communication Strategy",
                "UX & UI Design",
                "Pitch-Deck",
            ],
        },
    },
    footer: {
        title: "How can we help you? Write us!",
    },
}

const Projekte = (props) => (
    <LanguageContext.Provider value={languages.en}>
        <ProjektePage
            seo={content.seo}
            h1Header={content.h1Header}
            projects={content.projects}
            footer={content.footer.title}
        ></ProjektePage>
    </LanguageContext.Provider>
)
export default Projekte
