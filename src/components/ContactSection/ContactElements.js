import styled from "styled-components"
import {Link as Link_Router} from 'react-router-dom'


export const ContactContainer = styled.section`
    /* height: 800px; */
    /* min-height: 100vh; */
    scroll-snap-align: start;
    background-color: #fff;
    color: #fff;
    display: block;
    margin: auto;

    @media screen and (max-width: 480px){
        /* padding: 50px 0px 0px; */
    }
`;

export const ContactWrapper = styled.div`
    /* padding: 80px 0px 0px; */
    min-height: 600px;
    display: grid;
    
    @media screen and (max-width: 320px){
        min-height: 800px;
    }

    @media screen and (max-width: 480px){
        min-height: 800px;
    }
`;

export const ContactContent = styled.div`
    margin: -600px 0 0 0;
    position: absolute;
    width: 100%;
    
    @media screen and (max-width: 320px){
        margin: -800px 0 0 0;
    }

    @media screen and (max-width: 480px){
        margin: -800px 0 0 0;
    }
`;

export const ContactFormData = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 100px 100px 50px;
    color: #14587d;
    
    @media screen and (max-width: 320px){
        flex-direction: column-reverse;
        padding: 250px 20px 0;
        width: 100vw;
    }

    @media screen and (max-width: 480px){
        flex-direction: column-reverse;
        padding: 250px 20px 0;
        width: 100vw;
    }

    @media screen and (max-width: 768px){
        padding: 100px 50px 50px;
        width: 100vw;
    }
`;

export const ContactDetails = styled.div`
    background: #fff;
    padding: 50px;
    
    @media screen and (max-width: 320px){
        padding: 20px;
        width: 100%;
    }

    @media screen and (max-width: 480px){
        padding: 20px;
        width: 100%;
    }
`;

export const ContactList = styled.div`
    margin: 10px 0;
    
    @media screen and (max-width: 320px){
    }

    @media screen and (max-width: 480px){
    }
`;

export const ContactForm = styled.form`
    background: #29ade0;
    width: 450px;
    padding: 50px;

    @media screen and (max-width: 320px){
        padding: 20px;
        width: 100%;
        height: -webkit-fill-available;
    }

    @media screen and (max-width: 480px){
        padding: 20px;
        width: 100%;
        height: -webkit-fill-available;
    }
`;

export const Input = styled.input`
    color: #fff;
    padding: 1rem;
    margin: 1rem 0;
    background: transparent;
    border: none;
    border-bottom: solid 2px;
    width: 100%;

    &:focus {
        background: #86d3f08c;
        border-color: #14587d;
        transition: all 0.5s ease-in-out;
        outline: none !important;
    }
    
    ::placeholder {
        color: #fff;
    }

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
    padding: 0 0 20px;

    @media screen and (max-width: 768px){
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;

export const SectionLabel = styled.h1`
    text-transform: uppercase;
    padding: 20px 0px;
    color: #14587d;
`;

export const LineImg = styled.img`
    width: 10px;
    height: 20px;
    margin: auto;
    display: revert;
`;