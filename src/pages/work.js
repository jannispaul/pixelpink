import React from "react"
import { graphql } from "gatsby"
import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1Header from "../components/H1Header"
import ContactFooter from "../components/ContactFooter"
import SingleProject from "../components/SingleProject"
import LogoMobile from "../components/LogoMobile"

const PROJECTS = [
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA",
        title: "Revolutionieren traditionelles Modelbooking",
        id: "01",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE2",
        id: "02",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE3",
        id: "02",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE4",
        id: "02",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE5",
        id: "02",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE6",
        id: "02",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE7",
        id: "02",
    },
    {
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE8",
        id: "02",
    },
]
const WorkPage = props => (
    <StandardLayout>
        <SEO title="Home" keywords={[`PixelPink`, `application`, `react`]} />
        <LogoMobile/>
        <H1Header
            mainline="Eine selektierte Auswahl unserer Arbeiten"
            subline="made with Love for Friends"
        />

        {props.data.theAmericans.edges.map(({ node }, i) => (
            <SingleProject
                img={node.childImageSharp.fluid}
                imgAltText={PROJECTS[i].imgAltText}
                company={PROJECTS[i].company}
                title={PROJECTS[i].title}
                key={i}
            />
        ))}
        {/* <SingleProject
                    props.data.heroimage.edges[0].node.childImageSharp.fluid
                img={props.data.theAmericans.edges[0].node.childImageSharp.fluid}
                imgAltText={PROJECTS[i].imgAltText}
                company={PROJECTS[i].company}
                title={PROJECTS[i].title}
                key={i}
            /> */}
        <ContactFooter mainline="Sind Sie bereit digital durchzustarten?" />
    </StandardLayout>
)

export const query = graphql`
    {
        theAmericans: allFile(filter: { relativeDirectory: { eq: "work/theAmericans" } }) {
            edges {
                node {
                    id
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        }
    }
`

export default WorkPage
