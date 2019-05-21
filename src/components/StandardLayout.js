import React from "react"
import styled from "styled-components"

import "../theme/font-face.css"
import "../theme/variables.css"
import "../theme/styles.css"

import NavBar from "../components/Navigation"
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
    margin-top: 50px;
    @media (min-width: 769px) {
        margin-top: 70px;
    }
    @media (min-width: 1441px) {
        grid-column-start: 2;
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
                    <NavBar
                        burgerButtonClickHandler={
                            this.burgerButtonToggleClickHandler
                        }
                        showMobileMenu={this.state.mobileMenuOpen}
                    />
                    {/* <MobileMenu showMobileMenu={this.state.mobileMenuOpen} /> */}
                    <Main>{this.props.children}</Main>
                    <Footer />
                </App>
            </>
        )
    }
}

export default StandardLayout
