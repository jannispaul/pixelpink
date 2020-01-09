import React from "react"
import CookieConsent from "react-cookie-consent"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledContainer = styled.div`
    background: var(--color-primary);
    & > div {
        display: flex;
        align-items: center !important;
        margin: auto;
        max-width: 1168px;
        z-index: 0;
        & > div {
            margin-left: 0 !important;
        }
        & > button {
            margin-right: 0 !important;
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
            }}
            buttonStyle={{
                background: "white",
                color: "var(--color-primary)",
                fontWeight: "600",
                fontSize: "18px",
                padding: "18px",
                border: "none",
                cursor: "pointer",
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
