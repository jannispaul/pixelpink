// import SingleProject from "../components/SingleProject"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { StaticQuery, graphql } from "gatsby"

import React from "react"
import { Carousel } from "react-responsive-carousel"

const Slider = props => (
    <Carousel autoPlay>
        <div>
            {/* <SingleProject
                company={props.company}
                title={props.title}
                fluid={props.data.imageOne.childImageSharp.fluid}
                link={props.link}
                alt={props.imageAltText}
            /> */}
            <p className="legend">Legend 1</p>
        </div>
        <div>
            <p className="legend">Legend 2</p>
        </div>
    </Carousel>
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "work/qvsta.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1440) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <Slider data={data} {...props} />}
    />
)
