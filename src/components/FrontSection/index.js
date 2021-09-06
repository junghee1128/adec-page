import React, { useState, useRef } from 'react'
import Video from '../../images/video.mp4'
import OverlayImg from '../../images/front.png'
import { Button } from '../ButtonElements'
import {
    FrontContainer,
    FrontOverlayImg,
    FrontBg,
    FrontOverlay,
    VideoBg,
    FrontContent,
    FrontHeader,
    FrontPhrase,
    FrontBtnWrapper,
    PlayButton,
    ArrowPlay,
    ArrowPause
} from './FrontElements'

const FrontSection = ({ id, phrase }) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


    const vidRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        console.log('TEST: '+isPlaying);
        if (isPlaying) { // play or pause the video element
          vidRef.current?.pause();
        } else {
          vidRef.current?.play();
        }
        setIsPlaying(!isPlaying); // update the state
    }

    return (
        <FrontContainer id={id}>
            <FrontOverlayImg src={OverlayImg} type='img/png' />

            <FrontBg>
                <FrontOverlay />
                <VideoBg loop muted src={Video} ref={vidRef} type='video/mp4' />
            </FrontBg>

            <FrontContent>
                <FrontHeader>Strategic Consulting</FrontHeader>
                <FrontHeader>For a Digital World</FrontHeader>
                <FrontPhrase>
                    {phrase}
                </FrontPhrase>
                <FrontBtnWrapper>
                    {/* <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">Sign Up</Button> */}
                    <PlayButton to="play-video" onClick={togglePlay} >
                        {isPlaying ? <ArrowPause /> : <ArrowPlay />}
                    </PlayButton>
                </FrontBtnWrapper>
            </FrontContent>
        </FrontContainer>
    )
}

export default FrontSection
