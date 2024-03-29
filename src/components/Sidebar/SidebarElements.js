import styled from "styled-components";
import {FaTimes} from 'react-icons/fa';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #FACE00;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    
`
export const CloseIcon = styled(FaTimes)`
    color: #FFF;
`        
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    font-size: 2rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper = styled.div`
    color: #fff;
` 
export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6,60px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6,60px);
    }
`
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    //font-family: 'Roboto', sans-serif;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #28ABB9;
        transition: 0.2s ease-in-out;
    }

`
export const SidebarLinkR= styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    //font-family: 'Roboto', sans-serif;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover{
        color: #28ABB9;
        transition: 0.2s ease-in-out;
    }

`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkS)`
    border-radius:50px;
    background: #DBEDF3;
    white-space: nowrap;
    padding: 16px 64px;
    color: #28ABB9;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    &:hover{
        transition: all 0.2s ease-in-out;
        color: #fff;
        background: #28ABB9;

`;
