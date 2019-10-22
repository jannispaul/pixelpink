import React from "react"
import styled from "styled-components"

const StyledSection = styled.div`
        width: 100%;
        height: 100px;
        background: red;

        &>div{
            grid-template-columns: 1fr 1fr; 
            display: grid;
            max-width: 1168px;
            margin: auto;
        }
`


const div = props => (
    <StyledSection>
        <div>
            <div>fsdkjfsd</div>
            <div>sdfsdfsd</div>
        </div>
    </StyledSection>
)
export default div
