import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
import H1AndText from '../components/H1AndText';
import ContactFooter from '../components/ContactFooter'



class IndexPage extends React.Component {
    render(){
      return(
        <StandardLayout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <H1AndText mainline="Das Erlebnis als Erfolgsfaktor" subline="Wir helfen Ihnen in die Digitalisierung" body="Wir sind Spezialisten für digitales Produktdesign kreieren integrierte Services, erschaffen User Experience-Konzepte und bilden visuelle Gestalt. Ob App, Website oder Plattform: Wir entwickeln individuelle Designlösungen. Stets originell, immer durchdacht und maßgeschneidert entsprechend Ihrer Anforderungen und Bedürfnisse. 

          Das Erlebnis als Erfolgsfaktor. In unseren übersättigten Märkte und dem stetigen Überangebot sehen wir das Potenzial der Differenzierung und Abgrenzung in der Gestaltung eines einzigartigen Gesamtergebnisses. Der typische Nutzer ist meist ungeduldig. Reizüberflutung und Ablenkung sind keine Seltenheit heutzutage. Daher wollen wir den Fokus für Ihr Produkt steigern und das wesentliche kräftigen. Dies gelingt uns da wir einen minimalistischen, funktionalen Design-Ansatz verfolgen und praktizieren.
          
          Denn oft ist weniger ebend mehr!"/>
          <ContactFooter mainline="Wo drückt der Schuh? Wir helfen!"/>
        </StandardLayout>
      )
    }
}
export default IndexPage