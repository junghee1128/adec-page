import styled from "styled-components"
import resourcesBg from '../../images/resources-bg.png'


export const ResourcesContainer = styled.section`
    /* height: 800px; */
    min-height: 100vh;
    scroll-snap-align: start;
    background: url(${resourcesBg}) no-repeat center;
    background-color: #e6e6e6;
    color: #fff;
    display: block;
    margin: auto;
    padding: 100px 200px;
    
    @media screen and (max-width: 1245px){
        padding: 50px 0px;
    }

    @media screen and (max-width: 768px){
        padding: 50px 0px;
        min-height: unset;
    }
`;

export const ResourcesWrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    /* display: grid; */
`;

export const ResourcesRow = styled.div`
    display: grid;
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
`;

export const ResourcesTitle = styled.h1`
    text-align: right;
    margin: 30px auto 0;
    padding: 0 100px;
    font-size: 34px;
    font-weight: 600;
    color: #14587d;
    
    @media screen and (max-width: 320px){
        margin: 5px auto 0;
        padding: 0 25px;
        font-size: 15px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        margin: 5px auto 0;
        padding: 0 10px;
        font-size: 25px;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        padding: 0 10px;
        font-size: 25px;
        text-align: center;
    }
`;

export const ResourcesDescription = styled.p`
    text-align: right;
    margin: 30px auto 0;
    padding: 0 100px;
    font-size: 20px;
    font-weight: 600;
    color: #000;
    
    @media screen and (max-width: 320px){
        margin: 5px auto 0;
        padding: 0 25px;
        font-size: 15px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        margin: 5px auto 0;
        padding: 0 40px;
        font-size: 18px;
        text-align: center;
    }

    @media screen and (max-width: 768px){
        text-align: center;
    }
`;

export const ResourcesContent = styled.p`
    text-align: right;
    margin: 30px auto 0;
    padding: 0 100px;
    font-size: 18px;
    font-weight: 500;
    color: #000;
    
    @media screen and (max-width: 320px){
        margin: 20px auto 0;
        padding: 0 20px;
        text-align: center;
    }

    @media screen and (max-width: 480px){
        margin: 20px auto 0;
        padding: 0 40px;
        font-size: 15px;
        text-align: center;
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
    color: #0d507b;
`;

export const LineImg = styled.img`
    width: 10px;
    height: 20px;
    margin: auto;
    display: revert;
`;