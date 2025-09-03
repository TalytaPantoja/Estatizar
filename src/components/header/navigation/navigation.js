import styled from "styled-components"
import { Link } from "react-router-dom"

const NavSection = styled.div`
    display: flex;
`
const TextoOpcoes = styled.ul`
    display: flex;
    gap: 5rem;
`
const Opcao = styled.li`
    a {
    font-family: 'Helvetica';
    font-size: 16px;
    letter-spacing: 1px;
    font-weight: 700;
    position: relative;
    transition: color 0.3s ease;
    color: #3F569C;
    text-decoration: none;}

    a::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    transition: width 0.3s ease;}

    a:hover {color:rgb(22, 40, 93)}
`
const Opcoes = [
    { label: 'Início', link: '#' },
    { label: 'Serviços', link: '#' },
    { label: 'Contato', link: '#' }
]

function Navigation() {
    return (
        <NavSection id="menu-navegacao">
            <TextoOpcoes id="opcoes">
                {Opcoes.map((opcao) => (
                    <Opcao key={opcao.label}><Link to={opcao.link}>{opcao.label}</Link></Opcao>
                ))}
            </TextoOpcoes>
        </NavSection>
    )
}

export default Navigation;