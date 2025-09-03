import styled from "styled-components";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";
import { Button } from "../../assets/buttons/buttons";

const WhySection = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #3F569C;
    height: 65vh;
    color: white;

    &:PrevButton {
    transition: }
`
const ConteudoWhy = styled.div`
    position: relative;
    top: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;

    h2 {
    position: relative;
    top: -4rem;}
`
const ConteudoCarrossel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1rem;

    h1 {
    padding-bottom: 1rem;}

    p {
    color: #BFBFBF;
    text-align: center;}
`
const PrevButton = styled(Button)`
    position: absolute;
    left: 6rem;
`
const NextButton = styled(Button)`
    position: absolute;
    right: 6rem;
`

export default function WhyCarrossel() {
    const Reasons = [
    {   h1: 'Confiabilidade', 
        p: 'Utilizamos métodos estatísticos avançados para fornecer resultados confiáveis.'
    },
    {   h1: 'Agilidade na entrega', 
        p: 'Sabemos que seu tempo é importante. Por isso, ganhamos com prazos definidos e entregas rápidas, sem comprometer a qualidade.'
    },
    {   h1: 'Resultados precisos', 
        p: 'Utilizamos metodologias estatísticas rigorosas para garantir resultados precisos e insights importantes, ajudando você a tomar decisões'
    },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) =>
        prev === 0 ? Reasons.length -1 : prev -1);
    }

    const nextSlide = () => {
        setCurrentIndex((prev) => 
        prev === Reasons.length -1 ? 0 : prev +1);
    }

    return (
        <WhySection>
            <ConteudoWhy 
                as={motion.div}
            >
                <h2>Porquê escolher a nossa consultoria?</h2>
                
                <ConteudoCarrossel className="container">
                    <h1>{Reasons[currentIndex].h1}</h1>
                    <p>{Reasons[currentIndex].p}</p>
                </ConteudoCarrossel>

            </ConteudoWhy>

            <PrevButton onClick={prevSlide} size='1.8rem'><FaArrowLeft /></PrevButton>
            <NextButton onClick={nextSlide} size='1.8rem'><FaArrowRight /></NextButton>

        </WhySection>
    )
}