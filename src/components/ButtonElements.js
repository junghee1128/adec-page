import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Button = styled(Link)`
    transition: all 0.2 ease-in-out;
    text-transform: uppercase;
    background: ${({ dark }) => (dark ? '#14587d':'#29ade0')};
    /* background: #29ade0; */
    color: #fff;
    white-space: nowrap;
    line-height: 5;
    /* position: relative; */
    padding: 15px;
    margin: auto;
    width: 250px;
    left: 300px;
    cursor: pointer;

    /* border-radius: 50px;
    background: ${({ primary }) => (primary ? '#01bf71':'#010606')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '14px 48px':'12px 30px')};
    color: ${({ dark }) => (dark ? '#010606':'#fff')};
    font-size: ${({ fontBig }) => (fontBig ? '20px':'16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2 ease-in-out; */

    &:hover{
        transition: all 0.2 ease-in-out;
        background: ${({ dark }) => (dark ? '#4f7d9b':'#14587d')};
        /* background: #14587d; */
    }

    @media screen and (max-width: 320px){
        line-height: 5 !important;
    }

    @media screen and (max-width: 480px){
        line-height: 5 !important;
    }

    @media screen and (max-width: 768px){
        /* line-height: unset; */
        left: unset;
    }

    @media screen and (max-width: 959px){
        /* line-height: unset; */
        left: unset;
        top: 50px;
    }
`;