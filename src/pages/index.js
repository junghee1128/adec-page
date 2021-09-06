import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import FrontSection from '../components/FrontSection'
import AboutSection from '../components/AboutSection'
import InvestorSection from '../components/InvestorSection'
import ResourcesSection from '../components/ResourcesSection'
import NewsSection from '../components/NewsSection'
import FooterSection from '../components/Footer'
// import SecondSection from '../components/SecondSection'

import {
    sectionMain,
    sectionAbout,
    sectionInvestor,
    sectionResources,
    sectionNews
} from '../components/SecondSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => { //anfn
        setIsOpen(!isOpen)
    }

    return (
        <>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <FrontSection {...sectionMain} />
        <AboutSection {...sectionAbout} />
        <InvestorSection {...sectionInvestor} />
        <ResourcesSection {...sectionResources} />
        <NewsSection {...sectionNews} />
        <FooterSection />
        {/* <SecondSection {...second }/> */}
        </>
    )
}

export default Home
