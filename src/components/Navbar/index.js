import React from 'react'
import {HiMenuAlt1} from 'react-icons/hi'
import { Nav, 
    NavbarContainer, 
    NavLogo , 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
 } from './NavbarElement';
import logo from '../../images/logo.png'
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to= "/">
                        <img src = {logo} height = "30px" alt="AR. Sayed Trader Internationl"/>
                    </NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <HiMenuAlt1/>
                    </MobileIcon>
                    <NavMenu>
                        
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Services</NavLinks>
                        </NavItem>
                        
                        <NavItem>
                            <NavLinks to="product">Products</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    <NavBtn>
                      <NavBtnLink to="Contact us">Contact us</NavBtnLink>
                    </NavBtn>            
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
