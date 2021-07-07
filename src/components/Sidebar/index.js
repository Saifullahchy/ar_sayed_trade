import React from 'react'
import { SidebarContainer,
     Icon, 
     CloseIcon,
     SidebarWrapper,
     SidebarMenu,
     SideBtnWrap,
     SidebarLink,
     SidebarRoute,
     
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
                <SidebarLink to= "home" onClick={toggle}> Home</SidebarLink>     
                <SidebarLink to= "about" onClick={toggle}>About</SidebarLink>    
                <SidebarLink to= "services" onClick={toggle}>Services</SidebarLink>    
                <SidebarLink to= "products" onClick={toggle}>Products</SidebarLink>    
              </SidebarMenu> 
              <SideBtnWrap>
                  <SidebarRoute to = "/contact us">Contact Us</SidebarRoute>
              </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
