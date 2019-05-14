import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'
import ContactFooter from '../components/ContactFooter'


class IndexPage extends React.Component {
    render(){
      return(
        <StandardLayout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          <ContactFooter mainline="Schreiben Sie uns, wir antworten asap!"/>
        </StandardLayout>
      )
    }
}
export default IndexPage