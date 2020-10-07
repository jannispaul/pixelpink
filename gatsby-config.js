module.exports = {
    siteMetadata: {
        title: `PixelPink`,
        description: `PixelPink ist ein auf Design und Technologie spezialisiertes Studio für digitale Medien in Berlin.`,
        author: `FelixLebedinzew, Jannis Wicke`,
        //    image: "/images/gatsby-astronaut-2.png", // Path to your image you placed in the 'static' folder
        siteUrl: `https://www.pixel-pink.de`,
        languages: ["de", "en"],
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/content/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `pixelpink`,
                short_name: `pp`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `minimal-ui`,
                icon: `content/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-plugin-i18n",
            options: {
                langKeyDefault: "de",
                useLangKeyLayout: false,
                langKeyForNull: "any",
                prefixDefault: true,
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-preact`,
        `gatsby-plugin-netlify`,
        `gatsby-plugin-scroll-reveal`,
        {
            resolve: `gatsby-plugin-robots-txt`,
            options: {
                host: "https://pixel-pink.de",
                sitemap: "https://pixel-pink.de/sitemap.xml",
                policy: [{ userAgent: "*", allow: "/" }],
            },
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                // Add any options here
            },
        },
         {
            resolve: `gatsby-plugin-gtag`,
            options: {
                // your google analytics tracking id
                trackingId: `UA-151511487-1`,
                // Puts tracking script in the head instead of the body
                head: false,
                // enable ip anonymization
                anonymize: true,
            },
        },
    ],
}
