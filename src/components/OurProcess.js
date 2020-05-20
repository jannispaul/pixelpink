import React from "react"
import styled from "styled-components"
import OurProcessImage from "./OurProcessImage"
import OurProcessImageEN from "./OurProcessImageEN"
import { LanguageContext } from "./context"

const ContentContainer = styled.div``

const OurProcess = () => (
    <ContentContainer
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease-out"
    >
        {/* Following line needs to be fixed */}
        {LanguageContext ? <OurProcessImageEN /> : <OurProcessImage />}
    </ContentContainer>
)

OurProcess.contextType = LanguageContext

export default OurProcess
