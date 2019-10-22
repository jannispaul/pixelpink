import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SingleProject from "../components/SingleProject"

const HeroProject = props => (
    <SingleProject
        img={props.data.heroimage.edges[0].node.childImageSharp.fluid}
        imgAltText="ProjekttBild"
        company="Hardcoded COmpany"
        title="Hardcoded title"
        key="12345"
    />
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
