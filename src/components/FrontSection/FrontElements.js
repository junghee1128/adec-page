import styled from "styled-components"
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa'


export const FrontContainer = styled.section`
    /* height: 800px; */
    min-height: 100vh;
    scroll-snap-align: start;
    background: #0d507b;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    margin-top: -100px;
    position: relative;
    z-index: 1;
`;

export const FrontOverlayImg = styled.img`
    height: 100%;
    z-index: 1;
    left: 0;
    bottom: 0;
    position: absolute;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const FrontBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const FrontOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #fff;
    opacity: 0.5;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    --o-object-fit: cover;
    object-fit: cover;
    background: #0d507b;
`;

export const FrontContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FrontHeader = styled.h1`
    color: #0d507b;
    font-size: 60px;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`;

export const FrontPhrase = styled.p`
    margin-top: 24px;
    color: #000;
    font-size: 16px;
    text-align: center;
    max-width: 800px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const FrontBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PlayButton = styled.div`
    border-radius: 50%;
    background: #fff;
    height: 50px;
    width: 50px;
`;

export const ArrowPlay = styled(FaPlayCircle)`
    font-size: 50px;
    margin: 0;
    color: #29ade0;
`;

export const ArrowPause = styled(FaPauseCircle)`
    font-size: 50px;
    margin: 0;
    color: #29ade0;
`;