import styled from "styled-components";
import{Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
    background: linear-gradient(108deg,
    rgba(40,171,185,1) 0%, 
    rgba(40,171,185,0.8) 100%);
`;

export const FromWrap = styled.div`

    display: grid;
    z-index: 1;
    width: 100%;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    `



export const FormContent = styled.div`
    display: flex;
    justify-content: center;
    padding: 20px;
`
export const ImageContaienr = styled.div `
    max-width: 500px;
    margin: 20px auto;
    margin-right: 50px;
    align-items: center;
`
    
export const Image = styled.img`
    width:100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    overflow: hidden;
`

export const From = styled.form`
    background: #101522;
    max-width:500px;
    height: auto;
    width: 100%;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and(max-width: 400px){
        padding: 32px 32px;
        max-width: 380px;
    }
`

export const FromH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 50px;
    text-transform: uppercase;
    text-align: center;
    padding-top: 50px;

`;
export const FromLabel = styled.label`
    margin-bottom: 8px;
    font: 14px;
    color: #fff;
`

export const FromInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

export const FromButton = styled.div`
    background: #28ABB9;
    padding: 16px 0;
    border: none;
    border-radius:4px;
    text-align: center;
    color:#fff;
    font-size: 20px;
    cursor: pointer;
`
export const BackLink = styled(LinkR)`
    text-align: center;
    margin: 24px;
    color:#fff;
    font-size: 14px;
`
