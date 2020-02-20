import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
    background: var(--color-primary);
    & > div {
        max-width: calc(1168px + 32px);
        margin: auto;
    }
    & button {
        margin-bottom: 16px !important;
        margin-left: 16px !important;
        width: calc(100% - 32px) !important;
        @media (min-width: 592px) {
            width: auto !important;
            margin-top: 16px !important;
            margin-right: 16px !important;
        }
    }
`

const CookieNotice = () => (
    <StyledContainer>
        <CookieConsent
            debug={false}
            location="bottom"
            buttonText="🍪Alles klar!"
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
            Wir nutzen Cookies um Ihr Erlebnis noch besser zu machen.{" "}
            <Link
                to="/datenschutz"
                style={{ color: "white" }}
                aria-label="Link zum Datenschutz"
            >
                Mehr erfahren
            </Link>
        </CookieConsent>
    </StyledContainer>
)

export default CookieNotice
