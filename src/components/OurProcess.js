import React from "react"
import styled from "styled-components"
import OurProcessImage from "./OurProcessImage"

const ContentContainer = styled.div``

const OurProcess = () => (
    <ContentContainer
        data-sal="slide-up"
        data-sal-delay="0"
        data-sal-easing="ease-out"
    >
        <OurProcessImage></OurProcessImage>
    </ContentContainer>
)

export default OurProcess
