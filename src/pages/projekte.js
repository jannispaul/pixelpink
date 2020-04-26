import React from "react"
import ProjektePage from "../components/pages/ProjektePage"

const content = {
    seo: {
        title: "Projekte",
        keywords: [
            `projekte`,
            `pixelpink`,
            `arbeiten`,
            `referenzen`,
            `klienten`,
        ],
        description: "Eine kleine Auswahl der Arbeiten von PixelPink",
    },
    h1Header: {
        mainline: "Eine kleine Auswahl unserer Arbeiten",
        subline: "von der Website bis zum Appdesign",
    },
    projects: {
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
            title:
                "Der Feierabend-Talk mit Marina Weisband und Michael Bröcker",
            link: "https://überstunde.com",
            linkText: "www.überstunde.com",
            description:
                "Test test text lorem ipsum vTest test text lorem ipsum Test test text lorem ipsumTest test text lorem ipsum Test test text lorem ipsum",
            services: ["Test", "Text", "test"],
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
                "Börsen-Reporterin Sophie Schimansky berichtet live aus New York",
            link: "https://wall-street-weekly.com",
            linkText: "www.wall-street-weekly.com",
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
            title: "Nachhaltigkeit und Effizienz in der Frachtschifffahrt",
            link: "www.fuelcast.co/",
            linkText: "www.fuelcast.co",
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
            title: "Gabor Steingarts Vision des Journalismus",
            link: "https://mediapioneer.com/",
            linkText: "www.mediapioneer.com",
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
            title: "QVSTA revolutionieren die Fashion-Tech-Branche",
            link: "https://qvsta.com/",
            linkText: "www.qvsta.com",
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
            title: "Podcast und Geschichten aus dem Amerika von heute",
            link: "https://the-americans.com/",
            linkText: "www.the-americans.com",
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
            title: "Moderne Praxiskommunikation",
            link: "https://arztpraxis-schulzendorf.de/",
            linkText: "www.arztpraxis-schulzendorf.de",
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
            title: "Studenten mit Unternehmen verbinden",
            link: "https://www.die-masterarbeit.de",
            linkText: "www.die-masterarbeit.de",
        },
    },
    footer: {
        title: "Digitalen MVP bauen und User überzeugen?",
    },
}

const Projekte = (props) => (
    <ProjektePage
        seo={content.seo}
        h1Header={content.h1Header}
        projects={content.projects}
        footer={content.footer.title}
    ></ProjektePage>
)
export default Projekte
