import React from "react"
import styled from "styled-components"
import SocialMediaButton from "./SocialMediaButton"
import Icon from "./layout/Icon"
import { ICONS } from "../theme/Icons"

const StyledSection = styled.section`
    margin: 0 auto;
    padding: var(--padding-vertical) var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
    }

    & > h1 > span {
        color: var(--color-gray-medium);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }
`

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 834px) {
        grid-column-gap: 20px;
        grid-template-columns: repeat(4, 1fr);
    }
`

const Subline = styled.span`
    color: var(--color-gray-medium);
`
const SocialMedia = props => (
    <StyledSection>
        <div>
            <h1>
                {props.mainline} <br />
                <Subline>{props.subline}</Subline>
            </h1>
            <hr />
            <GridContainer>
                <SocialMediaButton link="https://de.linkedin.com/company/pixelpink-gbr">
                    <Icon icon={ICONS.LINKEDIN} />
                    LinkedIn
                </SocialMediaButton>
                <SocialMediaButton link="https://www.instagram.com/pixelpink.berlin/">
                    <Icon icon={ICONS.INSTAGRAM} />
                    Instagram
                </SocialMediaButton>
                <SocialMediaButton link="https://www.facebook.com/pixelpinkberlin/">
                    <Icon icon={ICONS.FACEBOOK} />
                    Facebook
                </SocialMediaButton>
                <SocialMediaButton link="https://www.behance.net/pixelpinkberlin">
                    <Icon icon={ICONS.BEHANCE} />
                    Behance
                </SocialMediaButton>
            </GridContainer>
        </div>
    </StyledSection>
)

export default SocialMedia
