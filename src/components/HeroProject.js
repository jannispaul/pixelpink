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
                images: this.props.data.indexProjects.edges,
                imgAltText: [
                    "Wall Street Weekly website inside chromebook and pixel3",
                    "Die-Masterarbeit.com website inside a blue Windows computer",
                    "Gabor Steingarts mediapioneer platform inside pink macbook",
                    "QVSTA website inside iPad in front of female model",
                    "Arztpraxis schulzendorf website inside macpro",
                    "The Americans website inside red macbook",
                    " Fuelcast Application in front of a container ship",
                ],
                company: "",
                title: "Eine selektierte Auswahl unserer Arbeiten",
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
                indexProjects: allFile(
                    filter: { relativeDirectory: { eq: "work/indexProjects" } }
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
