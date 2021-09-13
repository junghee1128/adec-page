import styled from 'styled-components'
import {Link as Link_Router} from 'react-router-dom'
import {Link as Link_Scroll} from 'react-scroll'


export const Nav = styled.nav`
    background: transparent;
    height: 100px;
    display: flex;
    position: sticky;
    top: 0;
    z-index: 10;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        transition: 0.8s all ease;
        background: #3b5274;
        height: 50px;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 100px;
    z-index: 1;
    width: 100%;
    padding: 0 20px;
    max-width: 1100px;
`;

export const NavLogo = styled(Link_Router)`
    /* color: red; */
    justify-self: flex-start;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-weight: 600;
    text-decoration: none;
`;

export const NavLogoImg = styled.img`
    margin: auto;
    display: block;
    height: 100px;
    
    @media screen and (max-width: 768px) {
        height: 50px;
    }
`;

export const MobileIcon = styled.div`
    display: none;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        margin: -15px -15px 0 0;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const Topbar = styled.header`
    display: grid;
    /* display: flex;
    flex-wrap: nowrap;
    width: 100%;
    top: 0;
    z-index: 99;
    position: absolute;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center; */

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const TopbarMenu = styled.div`
    display: flex;
    padding: 0px;
    max-height: 29px;
    line-height: 2;
    font-size: small;
    justify-content: space-evenly;
    text-decoration: none;
`;

export const TopbarItem = styled.div`
    display: flex;
    height: 20px;
    font-size: small;
`;

export const TopbarLinks = styled(Link_Scroll)`
    /* color: #0d507b;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer; */

    &:hover, &:active {
        color: #29ade0;
        font-weight: unset;
    }
`;

export const Search = styled.input`

`;

export const NavMenu = styled.ul`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    text-align: center;

    width: 80%;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 100px;
`;

export const NavLinks = styled(Link_Scroll)`
    color: #0d507b;
    display: flex;
    align-items: center;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    padding: 0 2rem;
    height: 100%;
    cursor: pointer;

    &:active, &:hover {
        border-bottom: solid 3px #29ade0;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLink = styled(Link_Router)`
    border-radius: 50px;
    background: #29ade0;
    white-space: nowrap;
    padding: 10px 22px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0d507b;
        color: #fff;
    }
`;