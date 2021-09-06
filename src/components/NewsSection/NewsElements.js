import styled from "styled-components";
import newsBg from '../../images/news-bg.png'
import news1 from '../../images/news-1.png'
import news2 from '../../images/news-2.png'


export const NewsContainer = styled.div`
    background: url(${newsBg}) center;
    background-color: #e6e6e6;
    color: #fff;
    display: block;
    margin: auto;
    padding: 80px 0px 0px;

    @media screen and (max-width: 480px){
        padding: 50px 0px 0px;
    }
`;

export const NewsWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    @media screen and (max-width: 320px){
        grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 480px){
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const NewsRow = styled.div`
    justify-content: center;
    align-items: center;
    text-align: left;
    margin: 50px 0 0 0;
    padding: 50px;
    min-height: 600px;
    width: 100%;

    &:nth-child(odd){
        background: url(${news1}) no-repeat center;
        background-color: #366a88;
    }
    &:nth-child(even){
        background: url(${news2}) no-repeat center;
        background-color: #0d5073;
    }
    
    @media screen and (max-width: 320px){
        background-repeat: unset;
        background-position: center;
        min-height: 500px;
        padding: 20px;
        margin: 0;
    }

    @media screen and (max-width: 480px){
        background-repeat: unset;
        background-position: center;
        min-height: 500px;
        padding: 20px;
        margin: 0;
    }

    @media screen and (max-width: 768px){
        padding: 20px;
    }
`;

export const NewsTitle = styled.h1`
    text-transform: uppercase;
    font-size: 25px;
    color: #fff;
    margin-top: 50px;
`;

export const NewsDate = styled.p`
    text-transform: capitalize;
    font-size: 20px;
    color: #29ade0;
    margin-top: 50px;
`;

export const NewsDescription = styled.p`
    text-transform: capitalize;
    font-size: 20px;
    color: #e2eaee;
    margin-top: 20px;
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