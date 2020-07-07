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
            title:
                "Landingpage für Gabor Steingarts Medien-Startup „ThePioneer“",
            link: "https://join.thepioneer.de",
            linkText: "Join.ThePioneer.de",
            description:
                "Für den Launch des Medien-Startups „ThePioneer“ konzipierten und entwickelten wir eine auf Conversion ausgerichtete Landingpage. Der One-Pager gibt einen Einblick in die Hintergründe und einzigartigen Vorhaben des Unternehmens und reißt aktuelle Inhalte der Plattform an. Das Design ist ganz „ThePioneer“ und besticht mit Videoinhalten und Animationen.",
            services: ["Konzeption", "UX & UI Design", "Gatsby / React"],
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
            title:
                "Der Feierabend-Talk mit Marina Weisband und Michael Bröcker",
            link:
                "https://www.thepioneer.de/originals/die-ueberstunde/podcasts",
            linkText: "www.überstunde.com",
            description:
                "Für Mediapioneers Podcast-Reihe „Überstunde“ mit Michael Bröcker und Marina Weisband entwickelten wir eine reduzierte Website, die über den Podcast informiert, den Nutzer auf die Streamingportale weiterleitet und weitere Mediapioneer Podcasts präsentiert.",
            services: ["Markenidentität", "UX & UI Design", "Gatsby / React"],
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
            description:
                "Die Website bietet dem Podcast „Wall Street Weekly“ mit Börsen-Reporterin Sophie Schimansky eine Bühne, indem sie möglichst simpel gehalten wurde. Es geht um den Inhalt und diesem steht hier nichts im Wege. Eine klare Nutzerführung und gute Performance kommen interessierten Nutzern zugute, die hier alles zum Podcast erfahren können und auch den Link zu ihrem bevorzugten Streamingportal finden.",
            link:
                "https://www.thepioneer.de/originals/wall-street-weekly/podcasts",
            linkText: "www.wall-street-weekly.com",
            services: ["Markenidentität", "UX & UI Design", "Gatsby / React"],
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
            description:
                "Fuelcast ist eine mobile App, die mithilfe von Artifical Intelligence das Energie- und Tankmanagement in der Frachtschifffahrt vereinfachen und optimieren will. Zusammen mit den Gründern des Startups „Fuelcast“ erarbeiteten wir Brand-Vision und Erscheinungsbild. Um ihren Marken- und Produktauftritt über mehrere Kontaktpunkte hinweg einheitlich zu gestalten, definierten wir das Interface für die mobile App und gestalteten Pitch- sowie Investordecks.",
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
            title: "Gabor Steingarts Vision des Journalismus",
            description:
                "Für Gabor Steingarts „Mediapioneer“, das sich die Demokratisierung des Journalismus auf die Fahne geschrieben hat, brauchte es eine flexible Website, um die Werte und das Verständnis des Unternehmens zu kommunizieren. Durch das Content-Management-System der Wordpress-Seite kann der stark wachsende Betrieb eigenständig Seiten und Inhalte handhaben. Mit starken Farben haben wir eine auffällige Markenidentität geschaffen, die den Besuchern im Gedächtnis bleibt.",
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
            title: "QVSTA revolutionieren die Fashion-Tech-Branche",
            description:
                "In der Fashion-Industrie ist es nach wie vor üblich, manuell nach Models zu suchen und diese per E-Mail-Schriftverkehr zu buchen. QVSTA digitalisiert die Fashion-Industrie und vereinfacht diese Prozesse. Über ihre Platform lassen sich Models suchen, buchen und Aufträge managen. Mit dem QVSTA-Team erarbeiteten wir ein modernes Markenerlebnis und ein komponentenbasiertes Design-System, das nun das Fundament für QVSTAs digitale Produkte bildet. ",
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
            title: "Podcast und Geschichten aus dem Amerika von heute",
            description:
                "Ziel des Projektes war eine simple Website zur Präsentation des Podcasts „The Americans“. Der Podcast erzählt Geschichten aus dem Amerika von heute und betrachtet Politik und Gesellschaft. Die Seite verbindet Performance mit einem klaren Navigationskonzept und hat durch ihre amerikanische Symbolismen ein hohen Wiedererkennungswert.",
            link: "https://www.thepioneer.de/originals/the-americans/podcasts",
            linkText: "www.the-americans.com",
            services: ["Markenidentität", "UX & UI Design", "Gatsby / React"],
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
            description:
                "Die frisch gegründete Arztpraxis in Schulzendorf wurde von uns vom Konzept bis zum Marketing begleitet. Aus dem Konzept entstand ein modernes Erscheinungsbild mit einprägsamem Logo. Der Hauptberührungspunkt mit den Patienten im Internet, die Website, punktet mit einem Fokus auf Einfachheit und Zugänglichkeit (Accessibility), ist leicht aufzufinden und verfügt über eine gute Positionierung bei Google und Jameda.",
            link: "https://arztpraxis-schulzendorf.de/",
            linkText: "www.arztpraxis-schulzendorf.de",
            services: [
                "Kommunikationsstrategie",
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
            title: "Studenten und Unternehmen miteinander verbinden",
            description:
                "Infolge der strategischen Neuausrichtung sowie der Erweiterung von „Partner der Wissenschaft UG”, halfen wir dem Unternehmen bei der Neu- und Umgestaltung ihrer Portale „Die-Bachelorarbeit.de” und „Die-Masterarbeit.de”. Durch die Kollaboration entstand eine Plattform mit Fokus auf erfolgsversprechende Lösungen – sowohl für den Nutzer als auch für Unternehmen, die Studenten suchen.",
            link: "https://www.die-masterarbeit.de",
            linkText: "www.die-masterarbeit.de",
            services: [
                "Kommunikationsstrategie",
                "UX & UI Design",
                "Pitch-Deck",
            ],
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
