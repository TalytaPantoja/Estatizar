import styled from "styled-components"
import { FaPhone, FaEnvelope } from "react-icons/fa6"
import { Link } from "react-router-dom";

const DivIcons = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    top: ${props => props.top || '15rem'};
`
const Icons = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    gap: 1rem;


    a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50px;
    font-size: 1rem;
    transition: all 0.3s ease;
    color: ${props => props.color || 'black'};
    background-color: ${props => props.bg || 'none'};
    

    &:hover {
    transform: translateY(-2px);}}
`
const Contatos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 2rem;

    .FaPhone {
    color: black;}
`

export function SocialMedia({flexDirection, top, bg, color}) {
    return (
        <>
        <DivIcons top={top}>
            <Icons flexDirection={flexDirection} bg={bg} color={color}>
                <Link aria-label="Facebook"><i className="fab fa-facebook-f"></i></Link>
                <Link aria-label="Instagram"><i className="fab fa-instagram"></i></Link>
                <Link aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></Link>
            </Icons>
        </DivIcons>
        </>
    )
}

const PhoneIcon = styled(FaPhone)`
    color: #333;
    margin-right: 1rem;
`
const EnvelopeIcon = styled(FaEnvelope)`
    color: #333;
    margin-right: 1rem;
`

export function Contato() {
    return (
        <Contatos>
            <p><PhoneIcon/>91 9 99999-9999</p>
            <p><EnvelopeIcon/>info@estatizar.com</p>
        </Contatos>
    )
}