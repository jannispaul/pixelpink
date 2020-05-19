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
        ueberstunde: {
            images: undefined,
            imgAltText: [
                "Uberstunde inside iPhone in a dark room",
                "Uberstunde by Mediapioneer Logo ",
                "Uberstunde Website inside iMac",
                "Uberstunde Podcast Mockup",
                "Uberstunde Gerhard Schröder Podcast",
            ],
            company: "Überstunde",
            title: "Evening talks with Marina Weisband and Michael Bröcker",
            link: "https://überstunde.com",
            linkText: "www.überstunde.com",
            description:
                "For Mediapioneer's podcast series Überstunde we developed a pared-down website that informs listeners about the podcast, referring them to streaming platforms and other Mediapioneer podcasts.",
            services: ["Brand Identity ", "UX & UI Design", "Gatsby / React"],
        },
        wallStreetWeekly: {
            images: undefined,
            imgAltText: [
                "wallStreetWeekly Website in Chromebook and Pixel4",
                "wallStreetWeekly by Mediapioneer Logo",
                "wallStreetWeekly Website inside iPhone showing resposnive home-layout",
                "wallStreetWeekly Website in MacBook Pro and iPhone laying on a white table",
                "wallStreetWeekly Webdesign progress from first iteration to final state",
            ],
            company: "Wall Street Weekly",
            title:
                "Stock market journalist Sophie Schimansky reports live from New York",
            description:
                "By keeping things simple as possible, this website offers the perfect stage for podcast Wall Street Weekly with stock market reporter Sophie Schimansky. Here, it's all about the content — and nothing stands in the way. Clear navigation and high performance allows interested users to learn all about the podcast and find links to their preferred streaming platform.",
            link: "https://wall-street-weekly.com",
            linkText: "www.wall-street-weekly.com",
            service: ["Brand Identity", "UX & UI Design", "Gatsby / React"],
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
        theAmericans: {
            images: undefined,
            imgAltText: [
                "The Americans website inside red macbook",
                "The Americans by mediapioneer logo",
                "The Americans podcast inside iPhone next to player",
                "The Americans website design iterations and versions",
                "The Americans website inside iPhone and iPad showing the responsive mobile version and clean code",
            ],
            company: "The Americans",
            title: "Podcasts and stories from today's America",
            description:
                "With this project we set out to create a simple website presenting The Americans, a podcast series chronicling American politics and society. The site combines high performance with a clear navigation concept and recognizable American symbolism.",
            link: "https://the-americans.com/",
            linkText: "www.the-americans.com",
            services: ["Brand Identity", "UX & UI Design", "Gatsby / React"],
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
