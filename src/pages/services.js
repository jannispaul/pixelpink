import React from 'react'
// import { Link } from 'gatsby'

import StandardLayout from '../components/StandardLayout'
import SEO from '../components/Seo'

class IndexPage extends React.Component {
    render(){
      return(
        <StandardLayout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
          Services
        </StandardLayout>
      )
    }
}
export default IndexPage