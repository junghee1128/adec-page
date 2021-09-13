import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FrontSection from '../components/FrontSection'
import AboutSection from '../components/AboutSection'
import InvestorSection from '../components/InvestorSection'
import ResourcesSection from '../components/ResourcesSection'
import NewsSection from '../components/NewsSection'
import ContactSection from '../components/ContactSection'
import FooterSection from '../components/Footer'

import {
    sectionMain,
    sectionAbout,
    sectionInvestor,
    sectionResources,
    sectionNews,
    sectionContact
} from './Data'

const Home = () => {
    const [floatersBg,setfloatersBg]=useState(false);
    const [navBg,setnavBg]=useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 200) {
            console.log(window.scrollY);
            setfloatersBg(true);
            setnavBg(true);
        }
        else {
            setfloatersBg(false);
            setnavBg(false);
        }
    }
    window.addEventListener('scroll', changeBackground);


    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => { //anfn
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar navBg={navBg} toggle={toggle} />
        <FrontSection {...sectionMain} />
        <AboutSection {...sectionAbout} />
        <InvestorSection {...sectionInvestor} />
        <ResourcesSection {...sectionResources} />
        <NewsSection {...sectionNews} />
        <ContactSection {...sectionContact} />
        <FooterSection floatersBg={floatersBg} />
        </>
    )
}

export default Home
