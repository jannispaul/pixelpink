import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carousel.css"
import SingleProject from "../components/SingleProject"

class HeroProject extends React.Component {
    constructor(props) {
        super(props)
        this.projects = {
            images: this.props.data.indexProjects.edges,
            imgAltText: [
                "Uberstunde website inside Display on black",
                "Wall Street Weekly website inside chromebook and pixel3",
                "Fuelcast Application in front of a container ship",
                "Gabor Steingarts mediapioneer platform inside pink macbook",
                "QVSTA website inside iPad in front of female model",
                "The Americans website inside red macbook",
                "Arztpraxis schulzendorf website inside macpro",
                "Die-Masterarbeit.com website inside a blue Windows computer",
            ],
            company: "",
            title: this.props.title,
            id: "01",
        }
    }

    render() {
        return (
            <div>
              
                <SingleProject
                    img={this.projects.images}
                    imgAltText={this.projects.imgAltText}
                    company={this.projects.company}
                    title={this.projects.title}
                    internal={this.props.link}
                    linkText={this.props.linkText}
                />

            </div>
        )
    }
}

export default (props) => (
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
        render={(data) => <HeroProject data={data} {...props} />}
    />
)
