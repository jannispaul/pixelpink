import React from "react"
import StandardLayout from "../StandardLayout"
import SEO from "../Seo"
import H1Header from "../H1Header"
import ContactFooter from "../ContactFooter"
import { StaticQuery, graphql } from "gatsby"

import SingleProject from "../SingleProject"

class ProjektePage extends React.Component {
    constructor(props) {
        super(props)
        // Set projects prop to this.projects
        this.projects = this.props.projects

        // Add in images from StaticQuery
        this.projects.damPodcast.images = this.props.data.damPodcast
        this.projects.joinPolitics.images = this.props.data.joinPolitics
        this.projects.thePioneer.images = this.props.data.thePioneer
        this.projects.thePioneerLP.images = this.props.data.thePioneerLP
        this.projects.fuelcast.images = this.props.data.fuelcast
        this.projects.mediapioneer.images = this.props.data.mediapioneer
        this.projects.qvsta.images = this.props.data.qvsta
        this.projects.musikVersicherung.images = this.props.data.musikVersicherung
        this.projects.arztpraxisSchulzendorf.images = this.props.data.arztpraxisSchulzendorf
        this.projects.dieMasterarbeit.images = this.props.data.dieMasterarbeit

        // Create array from projects to map over
        this.projectArray = Object.values(this.projects)
    }
    render() {
        return (
            <StandardLayout>
                <SEO
                    title={this.props.seo.title}
                    keywords={[...this.props.seo.keywords]}
                    description={this.props.description}
                />
                <H1Header
                    mainline={this.props.h1Header.mainline}
                    subline={this.props.h1Header.subline}
                />

                {this.projectArray.map((project, i) => (
                    <SingleProject
                        img={project.images.edges}
                        imgAltText={project.imgAltText}
                        company={project.company}
                        title={project.title}
                        key={i}
                        external={project.link}
                        linkText={project.linkText}
                        description={project.description}
                        services={project.services}
                    />
                ))}

                <ContactFooter mainline={this.props.footer} />
            </StandardLayout>
        )
    }
}

export default (props) => (
    <StaticQuery
        query={graphql`
            query {
                
                joinPolitics: allFile(
                    filter: { relativeDirectory: { eq: "work/joinPolitics" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }
                thePioneer: allFile(
                    filter: { relativeDirectory: { eq: "work/thePioneer" } }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }

                musikVersicherung: allFile(
                    filter: {
                        relativeDirectory: { eq: "work/musikversicherung" }
                    }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }

                thePioneerLP: allFile(
                    filter: { relativeDirectory: { eq: "work/thePioneerLP" } }
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

                damPodcast: allFile(
                    filter: { relativeDirectory: { eq: "work/damPodcast" } }
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


                arztpraxisSchulzendorf: allFile(
                    filter: {
                        relativeDirectory: { eq: "work/arztpraxisSchulzendorf" }
                    }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }

                dieMasterarbeit: allFile(
                    filter: {
                        relativeDirectory: { eq: "work/dieMasterarbeit" }
                    }
                    sort: { fields: name }
                ) {
                    edges {
                        node {
                            ...ProjectImagesFragment
                        }
                    }
                }
            }
        `}
        render={(data) => <ProjektePage data={data} {...props} />}
    />
)
