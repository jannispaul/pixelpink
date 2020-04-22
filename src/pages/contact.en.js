import React from "react"
import KontaktPage from "../components/pages/KontaktPage"

const content = {
    seo: {
        title: "Kontakt",
        keywords: [`kontakt`, `pixelpink`],
    },

    socialMedia: {
        mainline: "Noch nicht genug?",
        subline: "Let's be friends",
    },

    footer: {
        title: "Auf der Suche nach innovativen Konzepten?",
    },
}

const Kontakt = (props) => (
    <KontaktPage
        seo={content.seo}
        socialMedia={content.socialMedia}
        footer={content.footer}
    />
)
export default Kontakt
