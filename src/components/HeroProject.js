import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carousel.css"
import SingleProject from "../components/SingleProject"

class HeroProject extends React.Component {
    constructor(props) {
        super(props)
        this.projects = [
            {
                images: this.props.data.qvsta.edges,
                imgAltText: [
                    "Alt descritopn",
                    "Alt descritopn 2",
                    "Alt descritopn 3",
                ],
                company: "QVSTA",
                title: "Revolutionieren die Fashion-Tech Branche",
                id: "01",
            },
        ]
    }

    render() {
        return (
            <div>
                {/* <SingleProject
                    img={this.projects[0].images}
                    imgAltText={this.projects[0].imgAltText}
                    company={this.projects[0].company}
                    title={this.projects[0].title}
                /> */}
                {this.projects.map((project, i) => (
                    <SingleProject
                        img={project.images}
                        imgAltText={project.imgAltText}
                        company={project.company}
                        title={project.title}
                        key={i}
                        internal="/work"
                    />
                ))}
            </div>
        )
    }
}

export default props => (
    <StaticQuery
        query={graphql`
            query {
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
            }
        `}
        render={data => <HeroProject data={data} {...props} />}
    />
)
