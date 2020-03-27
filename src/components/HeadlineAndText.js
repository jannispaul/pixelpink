import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
    margin: 0 auto;
    padding: var(--padding-vertical) var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
    }

    p {
        color: var(--color-gray-dark);
        /* padding-right: 48px; */
        max-width: 750px;
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }

    /* @media (min-width: 834px) {
        padding: 130px var(--padding-side);
    } */
`

const Subline = styled.span`
    color: var(--color-gray-medium);
`

const HeadlineAndText = (props, { children }) => (
    <StyledSection >
        <div>
            {props.h1 ? (
                <h1 data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in">
                    {props.h1} <br />
                    <Subline>{props.subline}</Subline>
                </h1>
            ) : (
                ""
            )}
            {props.h2 ? (
                <h2 data-sal="slide-up" data-sal-delay="50" data-sal-easing="ease-in">
                    {props.h2} <br />
                    <Subline>{props.subline}</Subline>
                </h2>
            ) : (
                ""
            )}
            <hr data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-in"/>
            <p data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-in"> {props.body}</p>
            {props.body2 ? <p data-sal="slide-up" data-sal-delay="150" data-sal-easing="ease-in"> {props.body2}</p> : ""}
            {props.children}
        </div>
    </StyledSection>
)

export default HeadlineAndText
