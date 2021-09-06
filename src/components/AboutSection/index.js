import React, { useState } from 'react'
import * as FontAwesomeIcon from 'react-icons/fa'
import Line from '../../images/line.png'
import {
    AboutContainer,
    AboutWrapper,
    AboutRow,
    AboutHeader,
    AboutPhrase,
    SectionWrapper,
    SectionLabel,
    SectionIcons,
    LineImg,
    IconLabel
} from './AboutElements'

const AboutSection = ({ id, phrase }) => {
    return (
        <>
        <AboutContainer id={id}>
            <AboutWrapper>
                <AboutRow>

                    <AboutHeader>What we do</AboutHeader>
                    <AboutPhrase>
                        {phrase}
                    </AboutPhrase>

                </AboutRow>
            </AboutWrapper>

            <SectionWrapper>
                <SectionLabel><LineImg src={Line} /> Industries <LineImg src={Line} /></SectionLabel>
            </SectionWrapper>

            <SectionWrapper>
                <SectionIcons> <FontAwesomeIcon.FaShoppingBag /><IconLabel>Consumer &amp; Financial</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaExclamationTriangle /><IconLabel>Disaster Recovery</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaLightbulb /><IconLabel>Energy</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaLeaf /><IconLabel>Environment</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaGlobe /><IconLabel>Government</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaStethoscope /><IconLabel>Health</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaConciergeBell /><IconLabel>Hospitality</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaChalkboardTeacher /><IconLabel>Social Programs</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaPlaneDeparture /><IconLabel>Transportation</IconLabel> </SectionIcons>
                <SectionIcons id="blank"> </SectionIcons>
            </SectionWrapper>

            <SectionWrapper>
                <SectionLabel><LineImg src={Line} /> Services <LineImg src={Line} /></SectionLabel>
            </SectionWrapper>

            <SectionWrapper>
                <SectionIcons> <FontAwesomeIcon.FaUsers /><IconLabel>Advisory</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaChartLine /><IconLabel>Analytics</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaFingerprint /><IconLabel>Digital</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaUserTie /><IconLabel>Marketing &amp; Management</IconLabel> </SectionIcons>
                <SectionIcons> <FontAwesomeIcon.FaTools /><IconLabel>Program Implementation</IconLabel> </SectionIcons>
            </SectionWrapper>
        </AboutContainer>
        </>
    )
}

export default AboutSection
