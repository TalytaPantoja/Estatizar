import styled from "styled-components";

const LogoDiv = styled.div`
    display: flex;
`
const Logoh1 = styled.h1`
    font-size: ${props => props.size || '26px'};
    font-family: 'Arial Black';
    color: ${props => props.color || ' #3F569C'} ;
    border: ${props => props.border || '6px solid #3F569C'};
    padding: 2px;
`

function Logo ({color, border, size}) {
    return (
        <>
        <LogoDiv>
            <Logoh1 color={color} border={border} size={size}>ESTATIZAR</Logoh1>
        </LogoDiv>
        </>
    )
}

export default Logo;