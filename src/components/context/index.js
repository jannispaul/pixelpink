import React from "react"
export const languages = {
    de: {
        home: {
            title: "Home",
            link: "/",
        },
        projects: {
            title: "Projekte",
            link: "/projekte",
        },
        aboutUs: {
            title: "Über uns",
            link: "/ueber-uns",
        },
        services: {
            title: "Services",
            link: "/services",
        },
        contact: {
            title: "Kontakt",
            link: "kontakt",
        },
        cookieNotice: {
            copy: "Wir nutzen Cookies um Dein Erlebnis noch besser zu machen.",
            linkText: "Mehr erfahren",
            cta: "🍪Alles klar!",
        },
        english: {
            active: false,
        },
    },
    en: {
        home: {
            title: "Home",
            link: "/en/",
        },
        projects: {
            title: "Projects",
            link: "/en/projekte",
        },
        aboutUs: {
            title: "About us",
            link: "/en/ueber-uns",
        },
        services: {
            title: "Services",
            link: "/en/services",
        },
        contact: {
            title: "Contact",
            link: "/en/kontakt",
        },
        cookieNotice: {
            copy: "We use cookies to improve your browsing experience.",
            linkText: "Learn more",
            cta: "🍪Got it!",
        },
        english: {
            active: true,
        },
    },
}
export const LanguageContext = React.createContext(languages.de)
