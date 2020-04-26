import React from "react"
import { Link } from "gatsby"
import { LanguageContext } from "../context"
import styled from "styled-components"

const StyledLanguageSwitch = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    font-weight: 600;
    font-size: 16px;
    margin-top: 10vh;
    @media (min-width: 834px) {
        font-size: 14px;
    }
    div {
        display: inline;
    }
    a {
        text-decoration: none;
        opacity: 0.5;
    }
    span {
    }
`
class LanguageSwitch extends React.Component {
    render() {
        let language = this.context
        return (
            <StyledLanguageSwitch>
                <div>
                    {language.english.active ? (
                        <Link to="/">DE</Link>
                    ) : (
                        <span>DE</span>
                    )}{" "}
                    /{" "}
                    {language.english.active ? (
                        <span>EN</span>
                    ) : (
                        <Link to="/en/">EN</Link>
                    )}
                </div>
            </StyledLanguageSwitch>
        )
    }
}

LanguageSwitch.contextType = LanguageContext
export default LanguageSwitch
