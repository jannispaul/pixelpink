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

    /* Sweep To Right */
    a {
        display: inline-block;
        vertical-align: middle;
        margin-right: 2em;
        -webkit-transform: translateZ(0);
        transform: translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        -moz-osx-font-smoothing: grayscale;
        position: relative;
        -webkit-transition-property: color;
        transition-property: color;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
    }
    a:before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--color-primary);
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        -webkit-transform-origin: 0 50%;
        transform-origin: 0 50%;
        -webkit-transition-property: transform;
        transition-property: transform;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    a:hover, a:focus, a:active {
        color: white;
    }
    a:hover:before, a:focus:before, a:active:before {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
    }
    
`

const ContactFooter = props => (
    <StyledSection>
        <h3 data-sal="slide-up" data-sal-delay="0" data-sal-easing="ease-in">
            {props.mainline}
            <br />
            <a href="mailto:hello@pixel-pink.de?subject=Hey PixelPink!👋🏼&body=Hallo Felix und Jannis,">
                hello@pixel-pink.de
            </a><br/>
            <a href="tel:+4917681410001">
                +49 176 81 41 0001
            </a>
        </h3>
    </StyledSection>
)

export default ContactFooter

// /* Sweep To Right */
// .hvr-sweep-to-right {
//     display: inline-block;
//     vertical-align: middle;
//     margin-right: 2em;
//     padding-right: .2em;
//     padding-left: .2em;
//     -webkit-transform: translateZ(0);
//     transform: translateZ(0);
//     box-shadow: 0 0 1px rgba(0, 0, 0, 0);
//     -webkit-backface-visibility: hidden;
//     backface-visibility: hidden;
//     -moz-osx-font-smoothing: grayscale;
//     position: relative;
//     -webkit-transition-property: color;
//     transition-property: color;
//     -webkit-transition-duration: 0.3s;
//     transition-duration: 0.3s;
//   }
//   .hvr-sweep-to-right:before {
//     content: "";
//     position: absolute;
//     z-index: -1;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0;
//     background: #000;
//     -webkit-transform: scaleX(0);
//     transform: scaleX(0);
//     -webkit-transform-origin: 0 50%;
//     transform-origin: 0 50%;
//     -webkit-transition-property: transform;
//     transition-property: transform;
//     -webkit-transition-duration: 0.3s;
//     transition-duration: 0.3s;
//     -webkit-transition-timing-function: ease-out;
//     transition-timing-function: ease-out;
//   }
//   .hvr-sweep-to-right:hover, .hvr-sweep-to-right:focus, .hvr-sweep-to-right:active {
//     color: white;
//   }
//   .hvr-sweep-to-right:hover:before, .hvr-sweep-to-right:focus:before, .hvr-sweep-to-right:active:before {
//     -webkit-transform: scaleX(1);
//     transform: scaleX(1);
//   }