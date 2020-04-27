import React from "react"
import KontaktPage from "../components/pages/KontaktPage"
import { LanguageContext, languages } from "../components/context/index"

const content = {
    seo: {
        title: "Kontakt",
        keywords: [`kontakt`, `pixelpink`],
    },

    socialMedia: {
        mainline: "Looking for more?",
        subline: "Let's be friends",
    },

    footer: {
        title: "Looking for innovative concepts?",
    },
}

const Kontakt = (props) => (
    <LanguageContext.Provider value={languages.en}>
        <KontaktPage
            seo={content.seo}
            socialMedia={content.socialMedia}
            footer={content.footer}
        />
    </LanguageContext.Provider>
)
export default Kontakt
