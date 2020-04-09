import React from "react"
import styled from "styled-components"
import Icon from "../layout/Icon"
import { ICONS } from "../../theme/Icons"

const StyledButton = styled.a`
    @media (min-width: 834px) {
        display: none;
    }
    position: fixed;
    bottom: 40px;
    right: var(--padding-side);
    z-index: 999;
    background: #27d366;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100px;

    & svg {
        fill: var(--color-white);
        width: 26px;
        height: 26px;
        display: block;
        margin: 0 auto;
    }
`

const WhatsappButtton = () => (
    <StyledButton href="https://api.whatsapp.com/send?phone=4917681410001‬">
        <Icon icon={ICONS.WHATSAPP} />
    </StyledButton>
)
export default WhatsappButtton
