import React from "react"
import styled from "styled-components"

import "../theme/font-face.css"
import "../theme/variables.css"
import "../theme/styles.css"

import NavBar from "../components/Navigation"
import NavBarMobile from "../components/NavigationMobile"

// import MobileMenu from '../components/Navigation/MobileMenu'
import Footer from "../components/Footer"

const App = styled.div`
    height: 100%;

    @media (min-width: 1441px) {
        display: grid;
        grid-template-columns: 300px 1fr;
    }
`
const Main = styled.div`
    z-index: 0;
    position: relative;
    @media (min-width: 834px) {
        margin-top: 80px;
    }
    @media (min-width: 1441px) {
        grid-column-start: 2;
        margin-top: 0px;
    }
`

class StandardLayout extends React.Component {
    state = {
        mobileMenuOpen: false,
    }
    burgerButtonToggleClickHandler = () => {
        this.setState(prevState => {
            // console.log('toggle')
            return { mobileMenuOpen: !prevState.mobileMenuOpen }
        })
    }

    render() {
        return (
            <>
                {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
                <App>
                    <NavBar />
                    <NavBarMobile />
                    <Main>{this.props.children}</Main>
                    <Footer />
                </App>
            </>
        )
    }
}

export default StandardLayout
