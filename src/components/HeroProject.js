import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import SingleProject from "../components/SingleProject"
// import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../theme/carousel.css"

import Img from "gatsby-image"

const HeroProject = props => (
    <Carousel
        autoPlay={false}
        showThumbs={false}
        showArrows={true}
        useKeyboardArrows
        showStatus={false}
        infiniteLoop={true}
    >
        <Img
            fluid={props.data.heroimage.edges[0].node.childImageSharp.fluid}
            alt=""
        ></Img>
        <Img
            fluid={props.data.heroimage.edges[0].node.childImageSharp.fluid}
            alt=""
        ></Img>
        <Img
            fluid={props.data.heroimage.edges[0].node.childImageSharp.fluid}
            alt=""
        ></Img>
    </Carousel>
)
// export default HeroProject
export default props => (
    <StaticQuery
        query={graphql`
            {
                heroimage: allFile(
                    filter: { relativePath: { eq: "home/qvstaHero.jpg" } }
                ) {
                    edges {
                        node {
                            id
                            childImageSharp {
                                fluid(maxWidth: 1000) {
                                    ...GatsbyImageSharpFluid_withWebp
                                }
                            }
                        }
                    }
                }
            }
        `}
        render={data => <HeroProject data={data} {...props} />}
    />
)
