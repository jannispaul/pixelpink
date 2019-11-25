import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import Img from "gatsby-image"
// import styled from "styled-components"
// import Button from "../components/Button"
import SingleProject from "../components/SingleProject"

// const Project = styled.div`
//     padding-bottom: var(--padding-vertical);
// `

// const StyledImage = styled(Img)`
//     max-width: 1168px;
//     margin: auto;
//     max-height: 50vh;
// `

// const TextContainer = styled.div`
//     padding: 24px var(--padding-side);
//     margin: auto;
//     max-width: 1168px;
//     @media (min-width: 1216px) {
//         padding: 24px 0;
//     }
//     /* margin: 24px var(--padding-side); */
// `

/*Company Tag*/
// const Company = styled.span`
//     font-weight: 600;
//     color: var(--color-gray-dark);
//     font-size: 14px;
//     line-height: 1.25;
//     letter-spacing: 2px;
//     text-transform: uppercase;
// `

const HomeProject = props => (
    <SingleProject
        company={props.company}
        title={props.title}
        fluid={props.data.imageOne.childImageSharp.fluid}
        link={props.link}
        alt={props.imageAltText}
    />
)

export default props => (
    <StaticQuery
        query={graphql`
            query {
                imageOne: file(relativePath: { eq: "projects/qvstaHeader.jpg" }) {
                    childImageSharp {
                        fluid(maxWidth: 1000) {
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
            }
        `}
        render={data => <HomeProject data={data} {...props} />}
    />
)
