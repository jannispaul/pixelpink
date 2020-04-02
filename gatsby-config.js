module.exports = {
    siteMetadata: {
        title: `PixelPink`,
        description: `PixelPink ist ein auf Design und Technologie spezialisiertes Studio für digitale Medien in Berlin.`,
        author: `FelixLebedinzew, Jannis Wicke`,
        //    image: "/images/gatsby-astronaut-2.png", // Path to your image you placed in the 'static' folder
        siteUrl: `https://www.pixel-pink.de`,
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
                name: `gatsby-starter-default`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `content/images/favicon.png`, // This path is relative to the root of the site.
            },
        },
        `gatsby-plugin-offline`,
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-preact`,
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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-151511487-1",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                // head: false,
                // Setting this parameter is optional
                anonymize: true,
                // Setting this parameter is also optional
                // respectDNT: true,
                // Avoids sending pageview hits from custom paths
                // exclude: ["/preview/**", "/do-not-track/me/too/"],
                // Delays sending pageview hits on route update (in milliseconds)
                // pageTransitionDelay: 0,
                // Enables Google Optimize using your container Id
                // optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
                // Enables Google Optimize Experiment ID
                // experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
                // Set Variation ID. 0 for original 1,2,3....
                // variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
                // Any additional create only fields (optional)
                // sampleRate: 5,
                // siteSpeedSampleRate: 10,
                // cookieDomain: "example.com",
            },
        },
    ],
}
