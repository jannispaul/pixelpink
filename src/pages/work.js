import React from "react"
import { graphql } from "gatsby"
import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1Header from "../components/H1Header"
import ContactFooter from "../components/ContactFooter"
import SingleProject from "../components/SingleProject"
import LogoMobile from "../components/LogoMobile"

class WorkPage extends React.Component {
    // render() {

    constructor(props) {
        super(props)
        this.projects = [
            {
                images: this.props.data.ueberstunde,
                imgAltText: [
                    "Uberstunde inside iPhone in a dark room",
                    "Uberstunde by Mediapioneer Logo ",
                    "Uberstunde Website inside iMac",
                    "Uberstunde Podcast Mockup",
                    "Uberstunde Gerhard Schröder Podcast",
                ],
                company: "Überstunde",
                title: "Der Feierabend-Talk mit Marina Weisband und Michael Bröcker",
                link: "https://überstunde.com",
            },
            {
                images: this.props.data.wallStreetWeekly,
                imgAltText: [
                    "wallStreetWeekly Website in Chromebook and Pixel4",
                    "wallStreetWeekly by Mediapioneer Logo",
                    "wallStreetWeekly Website inside iPhone showing resposnive home-layout",
                    "wallStreetWeekly Website in MacBook Pro and iPhone laying on a white table",
                    "wallStreetWeekly Webdesign progress from first iteration to final state",
                ],
                company: "Wall Street Weekly",
                title: "Börsen-Reporterin Sophie Schimansky berichtet live aus New York",
                link: "https://wall-street-weekly.com",
            },
            {
                images: this.props.data.fuelcast,
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
                title: "Nachhaltigkeit in der Maritime-Industrie",
                link: "https://www.fuelcast.co/",
            },
            {
                images: this.props.data.mediapioneer,
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
            },
            {
                images: this.props.data.qvsta,
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
                title: "QVSTA revolutionieren die Fashion-Tech Branche",
                link: "https://qvsta.com/",
            },
            {
                images: this.props.data.theamericans,
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
            },
            {
                images: this.props.data.arztpraxisSchulzendorf,
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
            },

            {
                images: this.props.data.dieMasterarbeit,
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
            },
        ]
    }
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Projekte"
                    keywords={[
                        `projekte`,
                        `pixelpink`,
                        `arbeiten`,
                        `referenzen`,
                        `klienten`,
                    ]}
                    description="Eine selektierte Auswahl der Arbeiten von PixelPink"
                />
                <LogoMobile />
                <H1Header
                    mainline="Eine selektierte Auswahl unserer Arbeiten"
                    subline="made with 💖 for Friends"
                />

                {/* {props.data.allFile.edges.map(({ node }, i) => (
                <SingleProject
                    img={node.childImageSharp.fluid}
                    imgAltText={PROJECTS[i].imgAltText}
                    company={PROJECTS[i].company}
                    title={PROJECTS[i].title}
                    key={i}
                />
            ))} */}
                {this.projects.map((project, i) => (
                    <SingleProject
                        img={project.images.edges}
                        imgAltText={project.imgAltText}
                        company={project.company}
                        title={project.title}
                        key={i}
                        external={project.link}
                    />
                ))}
                {/* {
                    this.projects[0].images.edges[0].node.childImageSharp.fluid
                        .src
                } */}
                <ContactFooter mainline="Digitalen MVP bauen und User überzeugen?" />
            </StandardLayout>
        )
    }
}
export const query = graphql`
    query {
        ueberstunde: allFile(
            filter: { relativeDirectory: { eq: "work/ueberstunde" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }


        wallStreetWeekly: allFile(
            filter: { relativeDirectory: { eq: "work/wallStreetWeekly" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }

        fuelcast: allFile(
            filter: { relativeDirectory: { eq: "work/fuelcast" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }

        mediapioneer: allFile(
            filter: { relativeDirectory: { eq: "work/mediapioneer" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }

        qvsta: allFile(
            filter: { relativeDirectory: { eq: "work/qvsta" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }

        theamericans: allFile(
            filter: { relativeDirectory: { eq: "work/theAmericans" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }

        arztpraxisSchulzendorf: allFile(
            filter: { relativeDirectory: { eq: "work/arztpraxisSchulzendorf" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }

        dieMasterarbeit: allFile(
            filter: { relativeDirectory: { eq: "work/dieMasterarbeit" } }
            sort: { fields: name }
        ) {
            edges {
                node {
                    ...ProjectImagesFragment
                }
            }
        }


    }
`
export default WorkPage
