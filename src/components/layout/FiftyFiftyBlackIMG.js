import React from "react"
import styled from "styled-components"
import ServiceImage from "../ServiceImage"

const StyledSection = styled.div`
        width: 100%;
        background: var(--color-black);
        color: var(--color-white);
        padding: var(--padding-vertical) var(--padding-side);


        &>div{
            max-width: 1168px;
            margin: auto;
        }

        p {
            color: var(--color-gray-medium);

        }

        hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }

    &>div{
        @media (min-width: 769px) {
        grid-template-columns: 1fr 1fr; 
        display: grid;
        grid-gap: 100px;
        }
    }
`

const Square = styled.div`
    width: 36px;
    height: 36px; 
    background: var(--color-primary);
    margin-bottom: 20px;
`

const ContentContainer = styled.div`
     ${'' /* padding: var(--padding-vertical) var(--padding-side); */}
`

const div = props => (
    <StyledSection>
    
        <div>
            <ContentContainer>
                <Square></Square>
                <h2>Build <br/>Deliver
                </h2>
                <hr />
                <p>Lorem Text Missing Content</p>
            </ContentContainer>
            <ServiceImage/>
        </div>
        
    </StyledSection>
)
export default div
