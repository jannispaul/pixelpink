import { useEffect } from "react"
import { navigate } from "gatsby"

const getRedirectLanguage = () => {
    if (typeof navigator === `undefined`) {
        return "de"
    }

    const lang =
        navigator && navigator.language && navigator.language.split("-")[0]
    if (!lang) return "de"

    switch (lang) {
        case "en":
            return "en"
        default:
            return "de"
    }
}

const IndexPage = () => {
    useEffect(() => {
        const urlLang = getRedirectLanguage()
        navigate(`/${urlLang}`)
    }, [])

    return null
}

export default IndexPage
// Testcommentt
