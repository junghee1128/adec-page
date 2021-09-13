import styled from "styled-components"
import aboutBg from '../../images/about-bg.png'


export const AboutContainer = styled.section`
    /* height: 800px; */
    min-height: 100vh;
    scroll-snap-align: start;
    background: url(${aboutBg});
    color: #fff;
    display: block;
    margin: auto;
    padding: 100px 200px;

    @media screen and (max-width: 768px){
        padding: 50px;
        min-height: unset;
    }
`;

export const AboutWrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: grid;
`;

export const AboutRow = styled.div`
    display: grid;
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
    /* grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'`:`'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({ imgStart }) => (imgStart ? `'col1' 'col2'`:`'col1 col1' 'col2 col2'`)};
    } */
`;

export const AboutHeader = styled.h1`
    /* color: ${({ lightText }) => (lightText ? '#f7f78fa':'#010606')}; */
    font-size: 48px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 24px;

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const AboutPhrase = styled.p`
    max-width: 500px;
    margin-bottom: 35px;
    font-size: 15px;
    line-height: 24px;
    /* color: ${({ darkText }) => (darkText ? '#010606':'#fff')}; */
`;

export const SectionWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-transform: uppercase;
    align-content: space-around;
    justify-content: space-between;

    @media screen and (max-width: 768px){
        text-align: center;
        align-items: center;
        justify-content: center;
    }
`;

export const SectionLabel = styled.h1`
    text-transform: uppercase;
    padding: 20px 0px;
`;

export const LineImg = styled.img`
    width: 10px;
    height: 20px;
    margin: auto;
    display: revert;
`;

export const SectionIcons = styled.div`
    background: #fff;
    color: #4f7d9b;
    font-size: 50px;
    width: 19.5%;
    height: 150px;
    padding: 30px 0px;
    margin: 10px 0;
    justify-content: center;
    text-align: center;
    align-items: center;

    &#blank {
        background: transparent;
    }
    &:hover {
        background: #4f7d9b;
        color: #fff;
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 768px){
        width: 40%;
        margin: 10px;
    }

    @media screen and (max-width: 480px){
        width: 100%;
        margin: 10px;
    }
`;

export const IconLabel = styled.div`
    display: grid;
    font-size: 15px;
`;