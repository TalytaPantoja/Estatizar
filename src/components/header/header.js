import styled from "styled-components"
import Logo from "./logo/logo.js"
import Navigation from './navigation/navigation.js'
import { useEffect, useState } from "react"

const HeaderSection = styled.div`
    background-color: ${({ scrolled }) => (scrolled ? "white" : "white")};
    backdrop-filter: ${({ scrolled }) => (scrolled ? "blur(10px)" : "none" )};
    opacity: ${({ scrolled }) => (scrolled ? 0.85 : 1 )};
    transition: all 0.3s ease;
    padding: 1.5rem 0;
    width: 100%;
    top: 0;
    z-index: 1000;
    position: sticky;
`
const HeaderDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 1024px);
    @media (max-width: 768px);
    @media (max-width: 480px);
`

function Header () {
    const [scrolled, setScrolled] = useState(false); 

    useEffect(() => {
        const HandlerScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", HandlerScroll);
        return () => { window.removeEventListener("scroll", HandlerScroll); }
    }, []);

    return (
        <HeaderSection id="header" scrolled={scrolled}>
        <HeaderDiv id="container" className="container">
            <Logo />
            <Navigation/>
        </HeaderDiv>
        </HeaderSection>
    )
}

export default Header;