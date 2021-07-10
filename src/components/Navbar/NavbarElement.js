import styled from 'styled-components';
import {Link as LinkR } from 'react-router-dom';
import {Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#000' : '#27A4B2')};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    font-size: 1rem;
    z-index: 10;
@media screen and (max-width:960px){
    transition: 0ms.8s all ease;
}
`

export const NavbarContainer = styled.div`
   display : flex;
   justify-content: space-between;
   height: 80px;
   z-index: 1;
   width: 100%;
   padding:0 24px ;
   max-width: 1100px;

`
export const NavLogo = styled(LinkR)`
    justify-self:flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-left: 24px;
   
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and ( max-width:768px ){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color:#DBEDF3;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(LinkS)`
    color:#DBEDF3 ;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-weight: bold;

    &.active{
        border-bottom: 4px solid #FACE00;
    }
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;


    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled(LinkR)`
    border-radius:50px;
    background: #DBEDF3;
    white-space: nowrap;
    padding: 10px 22px;
    color: #28ABB9;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition:  all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        color: #010606;
        background: #FACE00;

    }
`

