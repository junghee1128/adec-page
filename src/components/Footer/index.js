import React, { useState, useRef } from 'react'
import Line from '../../images/line.png'
import Logo from '../../images/logo-transparent.png'
import * as FontAwesomeIcon from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrapper,
    NavLogo,
    NavLogoImg,
    SocialFloaters,
    SocialFloatersLink
} from './FooterElements'

const FooterSection = ({floatersBg}) => {
    return (
        <>
        <FooterContainer>

            <SocialFloaters style={{color:floatersBg?"#5bb7dc":"#0d507b"}}>
                <SocialFloatersLink><FontAwesomeIcon.FaFacebookF /></SocialFloatersLink>
                <SocialFloatersLink><FontAwesomeIcon.FaTwitter /></SocialFloatersLink>
                <SocialFloatersLink><FontAwesomeIcon.FaLinkedin /></SocialFloatersLink>
                <SocialFloatersLink><FontAwesomeIcon.FaInstagram /></SocialFloatersLink>
            </SocialFloaters>

            <FooterWrapper>
                <NavLogo to="/"><NavLogoImg src={Logo} /></NavLogo>
            </FooterWrapper>

        </FooterContainer>
        </>
    )
}

export default FooterSection
