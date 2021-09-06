import styled from "styled-components";
import footerBg from '../../images/footer-bg.png'
import {Link as Link_Router} from 'react-router-dom'


export const FooterContainer = styled.div`
    background-color: #333333;
    color: #fff;
    display: block;
    margin: auto;

    @media screen and (max-width: 480px){
        padding: 50px 0px 0px;
    }
`;

export const ContactWrapper = styled.div`
    background: url(${footerBg}) center;
    padding: 80px 0px 0px;
    min-height: 500px;
    display: grid;
    
    @media screen and (max-width: 320px){
    }

    @media screen and (max-width: 480px){
    }
`;

export const ContactFooter = styled.div`
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

export const SectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    align-content: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;

export const SectionLabel = styled.h1`
    text-transform: uppercase;
    padding: 20px 0px;
    color: #fff;
`;

export const LineImg = styled.img`
    width: 10px;
    height: 20px;
    margin: auto;
    display: revert;
`;