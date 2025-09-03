import styled from "styled-components"
import { Button } from "../../assets/buttons/buttons"

const ServiceSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    height: 100%;
    width: 100%;
`
const ServiceHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: #3F569C;
    width: 100%;
    height: 8rem;
    position: relative;

    h1 {
    color: white;
    font-size: 3rem;
    font-family: 'Fraunces';
    font-weight: 500;
    position: relative;}
`
const DivGrid = styled.div`
    display: flex;
    justify-content: center;
    padding: 5rem;
`
const ServiceGrid = styled.div`
    display: grid;
    gap: 3rem;
    grid-template-columns: repeat(3, 20rem);
    grid-template-rows: repeat(2, auto);
    margin: 3rem;

    & > :nth-child(4) {
        grid-column: 1;
        transform: translateX(50%);}

    & > :nth-child(5) {
    grid-column: 2;
    transform: translateX(50%);}

    @media (max-width: 1200px) {grid-template-columns: repeat(2, 1fr);}
    @media (max-width: 768px) {grid-template-columns: repeat(2, 1fr);}
    @media (max-width: 576px) {grid-template-columns: 1fr;}
`
const CardServico = styled.div`
    display: flex;
    height: 45rem;
    max-width: 20rem;
    background-color: #F2F2F2;
    padding: 2rem;
    position: relative;

    h2 {
    font-family: 'Fraunces';
    font-size: 1.875rem;
    font-weight: 400;
    padding-bottom: 0.5rem;
    text-align: left;}
`
const CardConteudo = styled.div`
    font-family: 'Fraunces';
    color: #3F569C;
    text-align: center;
`
const Servicos = [
    {name: 'Análise de Dados', description: 'Oferecemos análise de dados completa para o seu projeto, desde a organização das informações até a interpretação dos resultados. Entregamos resultados claros e precisos, prontos para serem utilizados em trabalhos acadêmicos ou pesquisas.'},
    {name: 'Alinhamento de Pesquisa', description: 'Realizamos o alinhamento completo da sua pesquisa, desde o cálculo do tamanho da amostra até a análise dos dados. Nossa consultoria entrega uma estrutura pronta para você desenvolver seu trabalho com confiança e precisão.'},
    {name: 'Estudos Epidemiológicos', description: 'Nossa consultoria oferece suporte especializado na análise de padrões, prevalência e incidência de doenças, interpretação de dados de saúde e identificação de associações entre variáveis. Garantimos resultados precisos e confiáveis para elevar o nível do seu trabalho acadêmico.'},
    {name: 'Testes Estatísticos', description: 'Realizamos testes estatísticos com métodos adequados para garantir resultados confiáveis e precisos. Nossa consultoria cuida de toda a análise, entregando dados prontos para aplicação em seus trabalhos ou pesquisas.'},
    {name: 'Resultados de TCC', description: 'Nossa consultoria realiza a análise estatística completa para o seu TCC. Desde a organização dos dados até a aplicação dos testes adequados, entregamos resultados claros, precisos e prontos para serem incluídos no seu trabalho.'}
]
const ButtonService = styled(Button)`
    position: absolute;
    bottom: 4rem;
    right: 4rem;

    &:hover {
    color:rgb(44, 69, 144);}
`

function Services () {
    return (
        <ServiceSection>
            <ServiceHeader>
                <h1 className="container">Nossos Serviços</h1>
            </ServiceHeader>
            <DivGrid className="container">
                <ServiceGrid>
                    {Servicos.map((servico) => (
                        <CardServico key={servico.name} id="card-servico">
                            <CardConteudo id="conteudo-card">
                                <h2> {servico.name}</h2>
                                <p>{servico.description}</p>
                            <ButtonService color="#3F569C">Saiba Mais</ButtonService>
                            </CardConteudo>
                        </CardServico>
                    ))}
                </ServiceGrid>
            </DivGrid>
        </ServiceSection>
    )
}

export default Services;