import React from 'react'
import { SidebarContainer,
     Icon, 
     CloseIcon,
     SidebarWrapper,
     SidebarMenu,
     SideBtnWrap,
     SidebarLink,
     SidebarRoute,
     SidebarLinkR
     
 } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    console.log(isOpen)
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle }>

        <Icon onClick =  {toggle}>
            <CloseIcon/>
        </Icon>
            <SidebarWrapper>
              <SidebarMenu>
                {/* <SidebarLink to= "" onClick={toggle}> Home</SidebarLink>      */}
                <SidebarLink to= "about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to= "discover" onClick={toggle}>Discover</SidebarLink>    
                <SidebarLink to= "services" onClick={toggle}>Services</SidebarLink>    
                <SidebarLinkR to= "products" onClick={toggle}>Products</SidebarLinkR>    
              </SidebarMenu> 
              <SideBtnWrap>
                  <SidebarRoute to = "contactusSection" onClick={toggle}>Contact Us</SidebarRoute>
              </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
