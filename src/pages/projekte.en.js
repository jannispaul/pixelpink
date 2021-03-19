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

        ff: {
            images: undefined,
            imgAltText: [
                "ff Website Mockup",
                "ff Website floating Mockup",
                "ff Website Mockup",
                "ff Website inside Monitor Mockup",
                "ff Website inside iPhone Mockup",
            ],
            company: "Forget.finance",
            title: "Branded Communication for Website and App",
            link: "https://forget.finance",
            linkText: "forget.finance",
            description:
                "Together with the Fintech startup Forget.finance we concepted and designed a fresh website. The site is serving the pre-seed communication strategy of the startup and supports their value-added service. In further cooperation we are helping to shape the products UX and UI of their App. ",
            services: ["communication strategy", "UX", "UI"],
        },
        

        joinPolitics: {
            images: undefined,
            imgAltText: [
                "joinPolitics Website Mockup",
                "joinPolitics Website floating Mockup",
                "joinPolitics Website inside iPhone Mockup",
                "joinPolitics Website inside iPad Mockup",
                "joinPolitics Website inside iPhone and Xdr Display Mockup",
            ],
            company: "JoinPolitics",
            title: "New Website for JoinPolitics",
            link: "https://www.joinpolitics.org",
            linkText: "Join.Politics.org",
            description:
                "The Startup JoinPolitics promotes political talents who concern with courage and passion for the big questions of our time. They support their talents in administration with capital, know-how and a network. Together with the whole team we created the new website, focused on clear bold design and ease of use thanks to the underlying Webflow technology.",
            services: ["Webflow-Design", "Webflow-Development", "Consulting"],
        },

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

        musikVersicherung: {
            images: undefined,
            imgAltText: [
                "Musikversicherung.com displayed in laptop",
                "Layout of 2 pages of Musikversicherung.com",
                "Mobile version of Musikversichernug.com",
            ],
            company: "B!-Das Versicherungsbüro",
            title: "Insure your instruments simply online",
            description:
                "The project involved a relaunch of the site, which previously ran on Wordpress. The new version includes an improved and dynamic design, stronger SEO and very good performance. In addition the site scores with a clear navigation concept, strong colors, various interactive inquiry forms and a static rating system.",
            link: "http://musikversicherung.com/",
            linkText: "www.musikversicherung.com",
            services: ["Brand Identity", "UX & UI Design", "Eleventy / JS"],
        },


        thePioneerLP: {
            images: undefined,
            imgAltText: [
                "The Americans Podcast, Ueberstunnde Podcast, Wall Street Weekly Podcast Website im Mockup",
                "Ideation Wall Street Weekly Podcast Website",
                "The Americans Podcast by thePioneer Logo",
                "The Americans Podcast by thePioneer inside iPhone Mockup",
                "The Americans Podcast by thePioneer Website inside iPhone and iPad Mockup",
                "The Americans Podcast by thePioneer Website inside iPad Mockup",
                "The Americans Podcast by thePioneer Website Ideation from start to launch",
                "Ueberstunde Podcast by thePioneer Logo",
                "Ueberstunde Podcast by thePioneer Website inside iPhone mockup",
                "Ueberstunde Podcast by thePioneer Website inside iPad mockup",
                "Ueberstunde Podcast by thePioneer Website inside iPhone mockup with headphones",
                "Wall Street Weekly Podcast by thePioneer Logo",
                "Wall Street Weekly Podcast by thePioneer Website inside Chromebook and Pixel mockup",
                "Wall Street Weekly Podcast by thePioneer Website inside iPhone mockup",
                "Wall Street Weekly Podcast by thePioneer Website inside MacBook Pro and iPhone mockup",
            ],
            company: "The Pioneer",
            title: "Landingpages for Podcasts and Conversion",
            link: "https://www.thepioneer.de/podcasts",
            linkText: "www.thepioneer.de/podcasts",
            description:
                "We designed and developed several landing pages for the media start-up 'ThePioneer': For each of the podcasts The Armericans, Wall Street Weekly and Überstunde we created a website spark the users interest and present the streaming offer. For the launch of 'ThePioneer' we created a one-pager, that gives you an insight into the background and unique projects of the company.",
            services: ["Brand Identity ", "UX & UI Design", "Gatsby / React"],
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

        damPodcast: {
            images: undefined,
            imgAltText: [
                "dam-podcast.de Website in iMac Mockup",
                "dam-podcast.de Website in iPad und iPhone Mockup",
                "dam-podcast.de Website Mockup",
            ],
            company: "Axel Springer Audio",
            title:
                "A digital home for a Fiction-Podcast Series in 3D Audio",
            link: "https://dam-podcast.de",
            linkText: "www.dam-podcast.de",
            description:
                "DAM - Dark Audio Moments is Germany’s first fiction podcast series in 3D audio! In cooperation with the team from AxelSpringer Audio, we created and developed the website for DAM. The podcast launched just in time for Halloween and you can find it here:following this link:",
            services: ["Design", "Webflow-Entwicklung", "Beratung"],
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
