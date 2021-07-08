import React, {useState , useEffect} from 'react'
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
   const [scrollNav, setScrollNav] = useState(false)
   
   const changeNav = () =>{
       if(window.screenY >= 80){
           setScrollNav(true)
       }else{
           setScrollNav(false)
       }
   }
   useEffect(() => {
       window.addEventListener('scroll',changeNav)
   }, [])

    return (
        <>
            <Nav scrollNav ={scrollNav} >
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
                      <NavBtnLink to="contactus">Contact us</NavBtnLink>
                    </NavBtn>            
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;
