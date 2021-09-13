import styled from "styled-components"
import {Link as Link_Router} from 'react-router-dom'


export const FooterContainer = styled.footer`
    background-color: #333333;
    color: #fff;
    display: block;
    margin: auto;

    @media screen and (max-width: 480px){
        padding: 50px 0px 0px;
    }
`;

export const FooterWrapper = styled.div`
    display: grid;
    padding: 20px 150px;
    /* justify-content: center;
    align-items: center; */
    
    @media screen and (max-width: 320px){
    }

    @media screen and (max-width: 480px){
    }
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

export const SocialFloaters = styled.div`
    padding: 0;
    margin: 0;
    position: fixed;
    bottom: 10px;
    left: 20px;
    width: 200px;
    line-height: 2;
    color: #0d507b;
    z-index: 999;
    font-size: 25px;
    
    @media screen and (max-width: 320px){
    }

    @media screen and (max-width: 480px){
    }
`;

export const SocialFloatersLink = styled.div`
    cursor: pointer;
    
    @media screen and (max-width: 320px){
    }

    @media screen and (max-width: 480px){
    }
`;