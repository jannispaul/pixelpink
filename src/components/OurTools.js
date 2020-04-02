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
import react from "../../content/images/tools/react.svg"
import shopify from "../../content/images/tools/shopify.svg"
import sketch from "../../content/images/tools/sketch.svg"
import visualStudioCode from "../../content/images/tools/visual-studio-code.svg"
import webflow from "../../content/images/tools/webflow.svg"
import wordpress from "../../content/images/tools/wordpress.svg"
import zeplin from "../../content/images/tools/zeplin.svg"

const ContentContainer = styled.div`
    padding-top: 40px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 130px;
    row-gap: calc(var(--padding-vertical) / 2);
    align-items: center;
    justify-content: space-between;
    & > div {
        text-align: center;
        white-space: nowrap;
        & > div {
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        & > p {
            margin: 0 -100px;
        }
    }
    @media (min-width: 769px) {
        grid-template-columns: repeat(6, 100px);
    }
    @media (min-width: 1230px) {
        grid-template-columns: repeat(8, 100px);
    }
`

const OurProcess = () => (
    <ContentContainer>
        <div>
            <div>
                <img src={atlassian} alt="Atlassian-Logo" />
            </div>
            <p>Atlassian</p>
        </div>
        <div>
            <div>
                <img src={sketch} alt="Sketch-Logo" />
            </div>
            <p>Sketch</p>
        </div>
        <div>
            <div>
                <img src={figma} alt="Figma-Logo" />
            </div>
            <p>Figma</p>
        </div>
        <div>
            <div>
                <img src={creativeCloud} alt="Adobe Creactive Cloud-Logo" />
            </div>
            <p>Adobe CC</p>
        </div>
        <div>
            <div>
                <img src={miro} alt="Miro-Logo" />
            </div>
            <p>Miro</p>
        </div>
        <div>
            <div>
                <img src={zeplin} alt="Zeplin-Logo" />
            </div>
            <p>Zeplin</p>
        </div>
        <div>
            <div>
                <img src={invision} alt="Invision-Logo" />
            </div>
            <p>Invision</p>
        </div>
        <div>
            <div>
                <img src={framerX} alt="FramerX-Logo" />
            </div>
            <p>FramerX</p>
        </div>
        <div>
            <div>
                <img src={googleAds} alt="Google Ads-Logo" />
            </div>
            <p>Google AdWords</p>
        </div>
        <div>
            <div>
                <img src={googleAnalytics} alt="Google Analytics-Logo" />
            </div>
            <p>Google Analytics</p>
        </div>
        <div>
            <div>
                <img src={webflow} alt="Webflow-Logo" />
            </div>
            <p>Webflow</p>
        </div>
        <div>
            <div>
                <img src={visualStudioCode} alt="VS Code-Logo" />
            </div>
            <p>VS Code</p>
        </div>
        <div>
            <div>
                <img src={netlify} alt="Netlify-Logo" />
            </div>
            <p>Netlify</p>
        </div>
        <div>
            <div>
                <img src={react} alt="React-Logo" />
            </div>
            <p>React</p>
        </div>
        <div>
            <div>
                <img src={shopify} alt="Shopify-Logo" />
            </div>
            <p>Shopify</p>
        </div>
        <div>
            <div>
                <img src={wordpress} alt="Wordpress-Logo" />
            </div>
            <p>Wordpress</p>
        </div>
    </ContentContainer>
)

export default OurProcess
