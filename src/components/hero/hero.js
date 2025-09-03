import styled from "styled-components";
import imagem from '../../assets/imagem-hero.jpg'
import { Button } from "../../assets/buttons/buttons";
import { Box, Paragrafo, ContentBox } from "../../assets/box/box";

const HeroSection = styled.section`
    position: relative;
    height: 85vh;
    display: flex;
    background-color: white;
`
const HeroImage = styled.div`
    display: flex;
    justify-content: space-around;
    background-image: url(${imagem});
    background-size: 100% 120%;
    background-attachment: fixed;
    background-repeat: no-repeat;
    border-bottom: 1rem solid #3F569C;
    position: absolute;
    top: 0;
    width: 90%;
    height: 55vh;
    z-index: 0;
`
const ButtonHero = styled(Button)`
    &:hover {
    background: #014235;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgb(3, 36, 29);}
`

function Hero() {
    return (
        <HeroSection id="hero-section">
        <HeroImage id="imagem" />
            <ContentBox className="container">
                <Box>
                    <h1>Precisando de consultoria?</h1>
                    <Paragrafo>Conte conosco para entregar trabalhos bem estruturados, claros e dentro do prazo. 
                    Explore nossos serviços e descubra como podemos ajudar você a alcançar 
                    seus objetivos com mais facilidade e confiança.</Paragrafo>
                        <ButtonHero background='#014235' padding='1rem 2rem' alignSelf='flex-end'>
                            Solicitar Orçamento
                        </ButtonHero>
                </Box>
            </ContentBox>
        </HeroSection>
    )
}

export default Hero;
