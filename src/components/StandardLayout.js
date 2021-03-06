import React from "react"
import styled from "styled-components"

import "../theme/font-face.css"
import "../theme/variables.css"
import "../theme/styles.css"

import NavBar from "../components/Navigation/Navigation"
import MobileNav from "../components/Navigation/MobileNav"

import MobileMenu from "../components/Navigation/MobileMenu"
import WhatsappButton from "../components/Navigation/WhatsappButton"
import Footer from "../components/Footer"

const App = styled.div`
    height: 100%;
    position: relative;

    @media (min-width: 1441px) {
        display: grid;
        grid-template-columns: 300px 1fr;
    }
`
const Main = styled.div`
    z-index: 1;
    position: relative;
    overflow: hidden;
    background: var(--color-white);

    @media (min-width: 1441px) {
        grid-column-start: 2;
    }
`

class StandardLayout extends React.Component {
    state = {
        mobileMenuOpen: false,
    }
    burgerButtonToggleClickHandler = () => {
        this.setState((prevState) => {
            // console.log('toggle')
            return { mobileMenuOpen: !prevState.mobileMenuOpen }
        })
    }

    render() {
        return (
            <>
                <App>
                    <NavBar />
                    <MobileNav
                        burgerButtonClickHandler={
                            this.burgerButtonToggleClickHandler
                        }
                        showMobileMenu={this.state.mobileMenuOpen}
                    />
                    <MobileMenu showMobileMenu={this.state.mobileMenuOpen} />
                    <WhatsappButton></WhatsappButton>
                    <Main>{this.props.children}</Main>
                    <Footer />
                </App>
            </>
        )
    }
}

export default StandardLayout
