import React from 'react' //rafce
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './SidebarElements'


const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="home" onClick={toggle}>Company</SidebarLink>
                    <SidebarLink to="about" onClick={toggle}>What We Do</SidebarLink>
                    <SidebarLink to="investor" onClick={toggle}>Investors</SidebarLink>
                    <SidebarLink to="resources" onClick={toggle}>Resources</SidebarLink>
                    <SidebarLink to="news" onClick={toggle}>News &amp; Events</SidebarLink>
                </SidebarMenu>

                {/* <SideBtnWrap>
                    <SidebarRoute to="sign-in">Sign In</SidebarRoute>
                </SideBtnWrap> */}
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
