import styled from "styled-components"

export const ContentBox = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    position: ${props => props.position || 'relative'};
    top: ${props => props.top || 0};
    z-index: 1;
`

export const Box = styled.div`
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem 2rem 3rem 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    height: auto;
    width: 40rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 1;

    h1 {
    color: #3F569C;
    font-size: 2.5rem;
    font-family: 'Fraunces';
    font-weight: 510;
    margin-bottom: 0;
    line-height: 1.2;
    position: relative;
    display: inline-block;

    &::after {
    content: "";
    display: block;
    position: absolute;
    bottom: -50px;
    left: 0;
    width: 80px;
    height: 3px;
    background: #3F569C;}}
`
export const Paragrafo = styled.p`
    display: block;
    color: #333;
    font-size: 1.1rem;
    font-family: 'Lato', sans-serif;
    font-weight: 300;
    margin-bottom: 0;
    line-height: 1.6;
    padding-left: 100px;
    position: relative;
`