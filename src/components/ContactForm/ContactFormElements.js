import styled from "styled-components";
import{Link as LinkR } from 'react-router-dom'

export const Container = styled.div`
    min-height: 692px;
    position : fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg,
    rgba(40,171,185,1) 0%, 
    rgba(40,171,185,0.8) 100%);
`;

export const FromWrap = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    @media screen and(max-width: 400px){
        height: 80%;
    }
`

export const Icon = styled(LinkR)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #fff;
    font-weight: 700;
    font-size: 32px;

    @media screen and(max-width: 400px){
        margin-left: 16px;
        margin-top: 8px;
    }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and(max-width: 480px){
        padding: 10px;
    }
`

export const From = styled.form`
    background: #101522;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and(max-width: 400px){
        padding: 32px 32px;
    }
`

export const FromH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;

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
