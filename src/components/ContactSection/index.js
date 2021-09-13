import React, { useState } from 'react'
import Line from '../../images/line.png'
import { Button } from '../ButtonElements'
import GoogleMapReact from 'google-map-react' //AIzaSyBwNGj8b3-NCUY0MA8qNFm5wmZKTANrt8E
import Mapstyles from './MapStyles'
import * as FontAwesomeIcon from 'react-icons/fa'
import {
    SectionWrapper,
    SectionLabel,
    LineImg,
    ContactContainer,
    ContactWrapper,
    ContactContent,
    ContactFormData,
    ContactDetails,
    ContactList,
    ContactForm,
    Input,
    NavLogo,
    NavLogoImg
} from './ContactElements'

const ContactSection = ({ id }) => {
    return (
        <>
        <ContactContainer id={id}>

            <ContactWrapper>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.GMAP_API_KEY }}
                    options = {{
                        styles: Mapstyles.dark
                    }}
                    defaultCenter={{
                        lat: 38.87254843717123,
                        lng: -77.26575933081732
                    }}
                    defaultZoom={13}
                >
                </GoogleMapReact>
            </ContactWrapper>

            <ContactContent>
                <ContactWrapper className="contact-content">
                    <ContactFormData>
                        <ContactForm>
                            <Input type="text" name="name" placeholder="Name" />
                            <Input type="email" name="email" placeholder="Email" />
                            <Input type="text" name="message" placeholder="Message" />
                            <Button dark="true"><FontAwesomeIcon.FaPaperPlane /> &nbsp; SEND</Button>
                        </ContactForm>
                        <ContactDetails>
                            <SectionWrapper>
                                <SectionLabel><LineImg src={Line} /> Contact Us <LineImg src={Line} /></SectionLabel>
                            </SectionWrapper>

                            <ContactList><FontAwesomeIcon.FaEnvelope /> &nbsp; INFO@ICF.COM</ContactList>
                            <ContactList><FontAwesomeIcon.FaPhoneAlt /> &nbsp; +1.703.934.3000</ContactList>
                            <ContactList><FontAwesomeIcon.FaClipboardList /> &nbsp; +1.703.934.3740</ContactList>
                            <ContactList><FontAwesomeIcon.FaMapMarkerAlt /> &nbsp; 9300 Lee Highway, Fairfax, VA 22031</ContactList>
                        </ContactDetails>
                    </ContactFormData>
                </ContactWrapper>
            </ContactContent>

        </ContactContainer>
        </>
    )
}

export default ContactSection
