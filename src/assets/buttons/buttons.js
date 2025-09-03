import styled from "styled-components"

export const Button = styled.button`
    display: inline-flex;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
    font-weight: ${props => props.weight || 300};
    padding: ${props => props.padding || 0};
    background: ${props => props.background || 'none'};
    font-family: ${props => props.font || 'Helvetica'};
    text-align: ${props => props.textAlign || 'center'};
    align-self: ${props => props.alignSelf || 'center'};
    font-size: ${props => props.size || '1rem'};
    color: ${props => props.color || '#FFFF'};

    &:hover {
    transform: translateY(-2px);}
`