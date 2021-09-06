import React from 'react' //rafce
import Logo from '../../images/logo.jpg'
import {FaBars, FaCaretRight} from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavLogoImg,
    MobileIcon,
    Topbar,
    TopbarItem,
    TopbarLinks,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from './NavbarElements'


const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav className="navbar">
            {/* <Topbar>
                <TopbarItem>
                    <TopbarLinks to="company"><FaCaretRight /> Blogs</TopbarLinks>
                    <TopbarLinks to="company"><FaCaretRight /> News &amp; Events</TopbarLinks>
                    <TopbarLinks to="company"><FaCaretRight /> Career</TopbarLinks>
                    <TopbarLinks to="company"><FaCaretRight /> Contact</TopbarLinks>
                </TopbarItem>
            </Topbar> */}

            <NavLogo to="/"><NavLogoImg src={Logo} /></NavLogo>
            
            <NavbarContainer>    
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks spy={true} smooth={true} hashSpy={true} to="home">Company</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks spy={true} smooth={true} hashSpy={true} to="about">What We Do</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks spy={true} smooth={true} hashSpy={true} to="investor">Investors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks spy={true} smooth={true} hashSpy={true} to="resources">Resources</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks spy={true} smooth={true} hashSpy={true} to="news">News &amp; Events</NavLinks>
                    </NavItem>
                </NavMenu>

                {/* <NavBtn>
                    <NavBtnLink to="signin">Sign In</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
