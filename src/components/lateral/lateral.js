import styled from "styled-components";
import { SocialMedia } from "../../assets/icons/icons";

const SectionLateral = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    opacity: 0.95;
    width: 7rem;
    z-index: 1000;
`

function Lateral() {
    return (
    <SectionLateral id="barra-lateral">
        <SocialMedia />
    </SectionLateral>
    );
}

export default Lateral;