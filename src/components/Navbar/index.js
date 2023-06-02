import React, {useState , useEffect} from 'react'
import {HiMenuAlt1} from 'react-icons/hi'
import {animateScroll as scroll} from 'react-scroll'
import { Nav, 
    NavbarContainer, 
    NavLogo , 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    NavLinkR
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

   const toggleHome = () =>{
       scroll.scrollToTop();
   };

    return (
        <>
            <Nav scrollNav ={scrollNav} >
                <NavbarContainer>
                    <NavLogo to= "/" onClick={toggleHome}>
                        <img src = {logo} height = "30px" alt="AR. Sayed Trader Internationl"/>
                    </NavLogo>
                    <MobileIcon onClick = {toggle}>
                        <HiMenuAlt1/>
                    </MobileIcon>
                    <NavMenu>
                        
                        <NavItem>
                            <NavLinks to="about"
                                smooth ={true} 
                                duration={500} 
                                spy={true} 
                                exact='true' 
                                offset={-80}
                                activeClass="active"
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                            smooth ={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active"
                            >Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                            smooth ={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active">Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="ProductsSection"
                            smooth ={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            activeClass="active">Products</NavLinks>
                        </NavItem>
                        
                        
                    </NavMenu>
                    <NavBtn>
                      <NavBtnLink to="contactusSection"
                      smooth ={true} 
                      duration={500} 
                      spy={true} 
                      exact='true' 
                      offset={-80}
                      activeClass="active">Contact us</NavBtnLink>
                    </NavBtn>            
                </NavbarContainer>
            </Nav>
        </>
    );

    console.log(NavLinks)
};

export default Navbar;
