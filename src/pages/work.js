import React from "react"
import { graphql } from "gatsby"
// import { Link } from 'gatsby'

import StandardLayout from "../components/StandardLayout"
import SEO from "../components/Seo"
import H1Header from "../components/H1Header"
import ContactFooter from "../components/ContactFooter"
import SingleProject from "../components/SingleProject"

const PROJECTS = [
    {
        img: "test",
        imgAltText: "QVSTA Model",
        company: "QVSTA",
        title: "Revolutionieren traditionelles Modelbooking",
        id: "01",
    },
    {
        img: "test2",
        imgAltText: "QVSTA Model",
        company: "QVSTA2",
        title: "coole HEADLINE",
        id: "02",
    },
]
export default ({ data }) => {
    return (
        <StandardLayout>
            <SEO
                title="Home"
                keywords={[`PixelPink`, `application`, `react`]}
            />
            <H1Header
                mainline="Eine selektierte Auswahl unserer Arbeiten"
                subline="made with Love for Friends"
            />

            {PROJECTS.map(PROJECTS => (
                <SingleProject
                    img={data.imageOne.childImageSharp.fluid}
                    imgAltText={PROJECTS.imgAltText}
                    company={PROJECTS.company}
                    title={PROJECTS.title}
                    key={PROJECTS.id}
                />
            ))}
            <ContactFooter mainline="Sind Sie bereit digital durchzustarten?" />
        </StandardLayout>
    )
}
// export default WorkPage

export const query = graphql`
    query {
        imageOne: file(relativePath: { eq: "qvstaHeader.jpg" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`
