import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Button from '../components/Button'

const Project = styled.div`

`
const StyledImage = styled(Img)`
    max-width: 1168px;
    margin: auto;
    max-height: 50vh;
`

const TextContainer = styled.div`
        padding: 24px var(--padding-side);
        margin: auto;
        max-width: 1168px;
        @media (min-width: 1216px){
            padding: 24px 0;
        }
        /* margin: 24px var(--padding-side); */

`

/*Company Tag*/
const Company = styled.span`
    font-weight: 600;
    color: var(--color-gray-dark);
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 1.79;
    text-transform: uppercase;
`

const SingleProject = (props) => (
    <Project>
        <StyledImage fluid={props.data.imageOne.childImageSharp.fluid} alt={props.imageAltText}/>
        <TextContainer>
            <Company>{props.company}</Company>
            <h2>{props.title}</h2>
            <Button link='/projekte'>Zeig mir mehr</Button>
        </TextContainer>    
    </Project>
)


export default props => (
    <StaticQuery
        query={graphql`
        query {
            imageOne: file(relativePath: { eq: "gatsby-astronaut-2.png" }) {
            childImageSharp {
                fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid_withWebp
                }
            }
            }
        }
        `}
    render={data => <SingleProject data={data} {...props} />}
    />
)