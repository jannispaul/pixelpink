import React from "react"
export const languages = {
    de: {
        home: {
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
    },
    en: {
        home: {
            link: "/en/",
        },
        projects: {
            title: "Projects",
            link: "/en/projects",
        },
        aboutUs: {
            title: "About us",
            link: "/en/about-us",
        },
        services: {
            title: "Services",
            link: "/en/services",
        },
        contact: {
            title: "Contact",
            link: "/en/contact",
        },
    },
}
export const LanguageContext = React.createContext(languages.de)
