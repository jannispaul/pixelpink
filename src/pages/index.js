import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
import H1Header from '../components/H1Header'
import ContactFooter from '../components/ContactFooter'
import SingleProject from '../components/SingleProject'
import BlackBGWhiteText from '../components/BlackBGWhiteText';


// import Image from '../components/Image'
// import ImageContainer from '../components/ImageContainer'
// import Button from '../components/Button'
// import Icon from '../components/layout/Icon'
// import {ICONS} from '../theme/Icons'

let copy = {
    bwcontainer: ["Unsere Herangehensweise an neue Projekte ist immer die gleiche, es ist nie das gleiche! Daher hören wir Ihnen zuerst aufmerksam zu und definieren aus den Resultaten die individuell notwendigen Prozessschritte für Ihr Projekt.","test", "So viele Absätze wie wir wollen", "Und noch einen – nur weil wir es können"],
    contact: "Let’s talk business. Schreib uns jetzt!"
}


class IndexPage extends React.Component {
    render(){
        return(
        <StandardLayout>
            <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <H1Header mainline="Wir machen digitales Produktdesign" subline="ohne Schnickschnack in Berlin"/>
            <SingleProject 
                image = "test"
                imageAltText = "QVSTA Model"
                company = "QVSTA" 
                title = "Revolutionieren traditionelles Modelbooking"
            />
            <BlackBGWhiteText 
                mainline = "Unsere Services" 
                subline = "– keine Massenware, nur originelles Design" 
                body =  {copy.bwcontainer}
                />
            <ContactFooter mainline={copy.contact}/>
        </StandardLayout>
        )
    }
}

export default IndexPage
