import styled from "styled-components";
import Logo from "../header/logo/logo";
import { Contato, SocialMedia } from "../../assets/icons/icons";

const FooterSection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #3F569C;
    height: 50vh;

    p{
    color: #BFBFBF;
    letter-spacing: 1px;}
`

const DivFooter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
`

const Direitos = styled.p`
    position: absolute;
    bottom: 0;
    font-size: 0.8rem;
`

function Footer() {
    return (
        <FooterSection> 
            <DivFooter> 
                <SocialMedia flexDirection='row' top='0' bg='#3333' color='#BFBFBF'/>
                <p>Ed. Flores, 455, sala 500 • Belém, PA 66066-666 • Brasil </p>
                <Contato />
                <Logo color='#BFBFBF' border='6px solid #BFBFBF' size='20px'/>
                <Direitos>© 2025 por Talyta.</Direitos>
            </DivFooter>  
        </FooterSection>
    )
}

export default Footer;