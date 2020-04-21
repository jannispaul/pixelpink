import React from "react"
import UeberUnsPage from "../components/pages/UeberUnsPage"

const content = {
    seo: {
        title: "About us",
        keywords: [
            `about us`,
            `pixelpink`,
            `team`,
            `prozess`,
            `tools`,
            `tech-stack`,
        ],
    },
    headlineAndText1: {
        mainline: "Who’s behind PixelPink?",
        subline: "Our story, our approach",
        copy:
            "PixelPink: That's us, Felix and Jannis, design and technology enthusiasts. It all began during our media and communication design studies in Berlin. At first we designed websites for family and friends, but passion got a hold of us and we just couldn't stop there. We craved for more and quickly realized that we’re able to work very efficiently and creatively together. Since 2015, we’ve worked with each other and our network of freelancers to build PixelPink.",
    },
    headlineAndText2: {
        mainline: "Our Strength",
        copy:
            "Our strength is cooperation: With our combined expertise in design and technology comes a solid foundation for critical discourse and high-quality results. We help our customers digitalize their companies, striving every day to make the (digital) world a more colorful and meaningful place. How can we help you on your digital journey?",
    },
    headlineAndText3: {
        mainline: "Our Process",
        subline: "Double Diamond",
        copy:
            "As a seasoned team, our design thinking-inspired workflow comes naturally: We analyze projects in their contextualized environments to develop an approach and improve on it. If we’re not satisfied with the direction things are going in, we start the process over. Using this iterative approach, we perfect our work step by step until we reach our goal.",
    },
    headlineAndText4: {
        mainline: "Our Tools",
        subline: "Design and Tech Stack",
        copy:
            "For us, it's important to have the right equipment for the right job. That’s why we work with a variety of tools. Here’s a selection of our favorite and most used ones.",
    },
    footer: {
        title: "Let us surprise you!",
    },
}
const UeberUns = (props) => (
    <UeberUnsPage
        seo={content.seo}
        headlineAndText1={content.headlineAndText1}
        headlineAndText2={content.headlineAndText2}
        headlineAndText3={content.headlineAndText3}
        headlineAndText4={content.headlineAndText4}
        footer={content.footer.title}
    />
)

export default UeberUns
