import React from "react"
import styled from "styled-components"
import ScrollAnchor from "../../components/ScrollAnchor"

const StyledSection = styled.div`
    width: 100%;
    padding: 0 var(--padding-side);

    & > div {
        max-width: 1168px;
        margin: auto;
        & > div {
            margin-bottom: 80px;
        }
    }

    p {
        color: var(--color-gray-dark);
    }

    hr {
        width: 40px;
        height: 2px;
        margin: 20px 0px;
        border: none;
        background-color: var(--color-gray-medium);
    }

    & > div {
        @media (min-width: 769px) {
            grid-template-columns: 1fr 1fr;
            display: grid;
            grid-gap: 100px;
        }
    }
`

// const Triangle = styled.div`
//     width: 0px;
//     height: 0px;
//     border-style: solid;
//     border-width: 0 20px 36px 20px;
//     border-color: transparent transparent var(--color-primary) transparent;
//     margin-bottom: 20px;
// `

// const Circle = styled.div`
//     width: 36px;
//     height: 36px;
//     border-radius: 20px;
//     background: var(--color-primary);
//     margin-bottom: 20px;
// `

const Square = styled.div`
    width: 36px;
    height: 36px;
    background: var(--color-primary);
    margin-bottom: 20px;
`

const Hexagon = styled.div`
    position: relative;
    width: 36px;
    height: 20.78px;
    background: var(--color-primary);
    margin: 17.39px 0;

    :before,
    :after {
        content: "";
        position: absolute;
        width: 0;
        border-left: 18px solid transparent;
        border-right: 18px solid transparent;
    }

    :before {
        bottom: 100%;
        border-bottom: 10.39px solid #e6004e;
    }

    :after {
        top: 100%;
        width: 0;
        border-top: 10.39px solid #e6004e;
    }
`

const div = (props) => (
    <StyledSection>
        <div>
            <div>
                <ScrollAnchor id="entwicklung"></ScrollAnchor>
                <Square
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                ></Square>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="50"
                    data-sal-easing="ease-out"
                >
                    {props.headline1}
                </h2>
                <hr
                    data-sal="slide-up"
                    data-sal-delay="75"
                    data-sal-easing="ease-out"
                />
                <p
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease-out"
                >
                    {props.body1}
                </p>
            </div>
            <div>
                <ScrollAnchor id="marketing"></ScrollAnchor>
                <Hexagon
                    data-sal="slide-up"
                    data-sal-delay="0"
                    data-sal-easing="ease-out"
                ></Hexagon>
                <h2
                    data-sal="slide-up"
                    data-sal-delay="50"
                    data-sal-easing="ease-out"
                >
                    {props.headline2}
                </h2>
                <hr
                    data-sal="slide-up"
                    data-sal-delay="75"
                    data-sal-easing="ease-out"
                />
                <p
                    data-sal="slide-up"
                    data-sal-delay="100"
                    data-sal-easing="ease-out"
                >
                    {props.body2}
                </p>
            </div>
        </div>
    </StyledSection>
)
export default div
