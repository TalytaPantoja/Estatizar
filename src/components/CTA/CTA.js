import styled from "styled-components";
import { Box, Paragrafo, ContentBox } from "../../assets/box/box"
import { Button } from "../../assets/buttons/buttons";

const CTASection = styled.section`
    position: relative;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`
const ButtonCTA = styled(Button)`
    &:hover {
    background: #014235;
    transform: translateY(-2px);
    box-shadow: 0 6px 20pxrgb(3, 36, 29);}
`

function CTA() {
    return (
        <CTASection>
            <ContentBox className="container">
                <Box>
                    <h1>Interessado em nossos serviços?</h1>
                    <Paragrafo>Entre em contato conosco para uma avaliação gratuita e descubra como podemos impulsionar seu crescimento</Paragrafo>
                    <ButtonCTA background='#014235' padding='1rem 2rem' alignSelf='flex-end'>Saiba como funciona</ButtonCTA>
                </Box>
            </ContentBox>
        </CTASection>
    )
}

export default CTA;