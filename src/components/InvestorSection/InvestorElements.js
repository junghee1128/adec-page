import styled from "styled-components"
import investorBg from '../../images/investor-bg.png'


export const InvestorContainer = styled.section`
    /* height: 800px; */
    min-height: 100vh;
    scroll-snap-align: start;
    background: url(${investorBg});
    color: #fff;
    display: block;
    margin: auto;
    padding: 100px 200px;

    @media screen and (max-width: 768px){
        padding: 50px;
        min-height: unset;
    }
`;

export const InvestorWrapper = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    width: 100%;
    display: grid;
`;

export const InvestorRow = styled.div`
    display: grid;
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3;
`;

export const InvestorPhrase = styled.p`
    max-width: 700px;
    padding: 20px 0px;
    font-size: 19px;
    line-height: 24px;
    color: #14587d;
    text-transform: none;
`;

export const InvestorChartWrapper = styled.div`
    display: flex;
`;

export const InvestorChart = styled.img`
    display: block;
    margin: auto;
    width: 100%;
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
    color: #0d507b;
`;

export const LineImg = styled.img`
    width: 10px;
    height: 20px;
    margin: auto;
    display: revert;
`;

export const AreaFloaters = styled.area`

`;