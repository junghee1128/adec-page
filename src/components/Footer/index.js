import React, { useState } from 'react'
import Line from '../../images/line.png'
import Logo from '../../images/logo-transparent.png'
import * as FontAwesomeIcon from 'react-icons/fa'
import {
    SectionWrapper,
    SectionLabel,
    LineImg,
    FooterContainer,
    ContactWrapper,
    NavLogo,
    NavLogoImg,
    ContactFooter
} from './FooterElements'

const FooterSection = () => {
    return (
        <>
        <FooterContainer>

            <ContactWrapper>
                <SectionWrapper>
                    <SectionLabel><LineImg src={Line} /> Contact Us <LineImg src={Line} /></SectionLabel>
                </SectionWrapper>

                <SectionWrapper>
                </SectionWrapper>
            </ContactWrapper>

            {/* <ContactWrapper>
            </ContactWrapper> */}

            <ContactFooter>
                <NavLogo to="/"><NavLogoImg src={Logo} /></NavLogo>
            </ContactFooter>

        </FooterContainer>
        </>
    )
}

export default FooterSection
