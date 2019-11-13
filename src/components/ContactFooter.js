import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    padding-top: 130px;
    padding-bottom: 130px;
    padding: 42px var(--padding-side);

    & > h3 {
        max-width: 1168px;
        margin: auto;
    }

    @media (min-width: 769px) {
        padding: 130px var(--padding-side);
    }

    & > h3 > a {
        color: var(--color-primary);
        text-decoration: none;
    }
`

const ContactFooter = props => (
    <StyledSection>
        <h3>
            {props.mainline}
            <br />
            <a href="mailto:hello@pixel-pink.de?subject=Hey PixelPink!👋🏼&body=Hallo Felix und Jannis,">
                hello@pixel-pink.de
            </a>
        </h3>
    </StyledSection>
)

export default ContactFooter
