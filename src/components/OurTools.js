import React from "react"
import styled from "styled-components"
import atlassian from "../../content/images/tools/atlassian.svg"
import creativeCloud from "../../content/images/tools/creative-cloud.svg"
import figma from "../../content/images/tools/figma.svg"
import framerX from "../../content/images/tools/framerX.svg"
import googleAds from "../../content/images/tools/google-ads.svg"
import googleAnalytics from "../../content/images/tools/google-analytics.svg"
import invision from "../../content/images/tools/invision.svg"
import miro from "../../content/images/tools/miro.svg"
import netlify from "../../content/images/tools/netlify.svg"
import shopify from "../../content/images/tools/shopify.svg"
import sketch from "../../content/images/tools/sketch.svg"
import visualStudioCode from "../../content/images/tools/visual-studio-code.svg"
import webflow from "../../content/images/tools/webflow.svg"
import wordpress from "../../content/images/tools/wordpress.svg"
import zeplin from "../../content/images/tools/zeplin.svg"

const ContentContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap: calc(var(--padding-vertical) / 2);
    align-items: center;
    /* justify-items: center; */
    @media (min-width: 834px) {
        grid-template-columns: repeat(5, 1fr);
    }
`

const OurProcess = () => (
    <ContentContainer>
        <img src={atlassian} alt="Atlassian-Logo" />
        <img src={creativeCloud} alt="Adobe Creactive Cloud-Logo" />
        <img src={figma} alt="Figma-Logo" />
        <img src={framerX} alt="FramerX-Logo" />
        <img src={googleAds} alt="Google Ads-Logo" />
        <img src={googleAnalytics} alt="Google Analytics-Logo" />
        <img src={invision} alt="Invision-Logo" />
        <img src={miro} alt="Miro-Logo" />
        <img src={netlify} alt="Netlify-Logo" />
        <img src={shopify} alt="Shopify-Logo" />
        <img src={sketch} alt="Sketch-Logo" />
        <img src={visualStudioCode} alt="VS Code-Logo" />
        <img src={webflow} alt="Webflow-Logo" />
        <img src={wordpress} alt="Wordpress-Logo" />
        <img src={zeplin} alt="Zeplin-Logo" />
    </ContentContainer>
)

export default OurProcess
