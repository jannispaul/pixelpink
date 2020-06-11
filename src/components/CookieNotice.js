import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import styled from "styled-components"
import { LanguageContext } from "./context"

const StyledContainer = styled.div`
    background: var(--color-primary);
    & > div {
        max-width: calc(1168px + 32px);
        margin: auto;
    }
    & button {
        margin-bottom: 16px !important;
        margin-left: 16px !important;
        width: calc(100vw - 32px) !important;
        @media (min-width: 592px) {
            width: auto !important;
            margin-top: 16px !important;
            margin-right: 16px !important;
        }
    }
`

class CookieNotice extends React.Component {
    render() {
        let language = this.context
        return (
            <StyledContainer>
                <CookieConsent
                    debug={false}
                    location="bottom"
                    buttonText={language.cookieNotice.cta}
                    cookieName="PixelPinkCookieNoticeAccepted"
                    style={{
                        background: "var(--color-primary)",
                        color: "white",
                        position: "relative",
                        zIndex: "200",
                        display: "flex",
                        alignItems: "center",
                    }}
                    buttonStyle={{
                        background: "white",
                        color: "var(--color-primary)",
                        fontWeight: "600",
                        fontSize: "18px",
                        padding: "18px",
                        border: "none",
                        cursor: "pointer",
                        margin: "0",
                    }}
                    expires={365}
                >
                    {language.cookieNotice.copy}{" "}
                    <Link
                        to="/datenschutz"
                        style={{ color: "white" }}
                        aria-label="Link zum Datenschutz"
                    >
                        {language.cookieNotice.linkText}
                    </Link>
                </CookieConsent>
            </StyledContainer>
        )
    }
}

CookieNotice.contextType = LanguageContext

export default CookieNotice
