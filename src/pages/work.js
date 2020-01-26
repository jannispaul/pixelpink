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
                images: this.props.data.fuelcast,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "Fuelcast",
                title: "Nachhaltigkeit in der Maritime-Industrie",
                link: "https://www.fuelcast.co/",
            },
            {
                images: this.props.data.mediapioneer,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "Mediapioneer",
                title: "Gabor Steingarts Vision des Journalismus",
                link: "https://mediapioneer.com/",
            },
            {
                images: this.props.data.qvsta,
                imgAltText: ["QVSTA Model", "QVSTA Model 2"],
                company: "Qvsta",
                title: "Revolutionieren die Fashion-Tech Branche",
                link: "https://qvsta.com/",
            },
            {
                images: this.props.data.theamericans,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "The Americans",
                title:
                    "Podcast und Geschichten aus dem Amerika von heute",
                link: "https://the-americans.com/",
            },
            {
                images: this.props.data.arztpraxisSchulzendorf,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "Arztpraxis-Schulzendorf",
                title: "Moderne Praxiskommunikation",
                link: "https://arztpraxis-schulzendorf.de/",
            },
            {
                images: this.props.data.dieMasterarbeit,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "Die-Masterarbeit.de",
                title: "Verbindet Studenten mit Unternehmen",
                link: "https://www.die-masterarbeit.de/",
            },
            {
                images: this.props.data.stuff,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "Free Work",
                title: "Ist Ihr Projekt das nächste?",
                link: "https://www.die-masterarbeit.de/",
            },
        ]
    }
    render() {
        return (
            <StandardLayout>
                <SEO
                    title="Home"
                    keywords={[`PixelPink`, `application`, `react`]}
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
        stuff: allFile(
            filter: { relativeDirectory: { eq: "work/stuff" } }
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
    }
`
export default WorkPage
