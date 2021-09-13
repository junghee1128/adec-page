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
    TopbarMenu,
    TopbarItem,
    TopbarLinks,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,
    Search
} from './NavbarElements'


const Navbar = ({ navBg, toggle }) => {
    return (
        <>
        <Topbar className="topnav">
            <TopbarMenu>
                <ul>
                    <li className="one"><TopbarLinks to="blog">Blog</TopbarLinks></li>
                    <li className="two"><TopbarLinks to="news">News &amp; Events</TopbarLinks></li>
                    <li className="three"><TopbarLinks to="careers">Careers</TopbarLinks></li>
                    <li className="four"><TopbarLinks to="contact">Contact</TopbarLinks></li>
                    <li className="five"><Search placeholder=" SEARCH " /></li>
                </ul>
            </TopbarMenu>
        </Topbar>
        <Nav className="navbar" style={{background:navBg?"#3b5274":"transparent"}}>

            <NavLogo to="/"><NavLogoImg src={Logo} /></NavLogo>
            
            <NavbarContainer>    
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>

                <NavMenu>
                    <NavItem>
                        <NavLinks  style={{color: navBg?"#fff":"#0d507b"}} spy={true} smooth={true} hashSpy={true} to="home">Company</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  style={{color: navBg?"#fff":"#0d507b"}} spy={true} smooth={true} hashSpy={true} to="about">What We Do</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  style={{color: navBg?"#fff":"#0d507b"}} spy={true} smooth={true} hashSpy={true} to="investor">Investors</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks  style={{color: navBg?"#fff":"#0d507b"}} spy={true} smooth={true} hashSpy={true} to="resources">Resources</NavLinks>
                    </NavItem>
                    {/* <NavItem>
                        <NavLinks  style={{color: navBg?"#fff":"#0d507b"}} spy={true} smooth={true} hashSpy={true} to="news">News &amp; Events</NavLinks>
                    </NavItem> */}
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
