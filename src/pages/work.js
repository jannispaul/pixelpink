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
                id: "01",
                link: "https://fuelcast.com",
            },
            {
                images: this.props.data.qvsta,
                imgAltText: ["QVSTA Model", "QVSTA Model 2"],
                company: "Qvsta",
                title: "Revolutionieren das Fashion-Model-Booking",
                id: "02",
                link: "https://qvsta.com",
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
                    "Podcast über Themen und Geschichten aus dem Amerika von heute",
                id: "03",
                link: "https://the-americans.com",
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
                id: "04",
                link: "https://arztpraxis-schulzendorf.de",
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
                <ContactFooter mainline="Sind Sie bereit digital durchzustarten?" />
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

// export const query = graphql`
//     {
//         allFile(
//             filter: {
//                 relativeDirectory: { eq: "work/arztpraxis-schulzendorf" }
//             }
//         ) {
//             edges {
//                 node {
//                     id
//                     childImageSharp {
//                         fluid {
//                             ...GatsbyImageSharpFluid_withWebp
//                         }
//                     }
//                 }
//             }
//         }
//     }
// `

export default WorkPage
