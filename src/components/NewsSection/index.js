import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import Line from '../../images/line.png'
import * as FontAwesomeIcon from 'react-icons/fa'
import {
    SectionWrapper,
    SectionLabel,
    LineImg,
    NewsContainer,
    NewsWrapper,
    NewsRow,
    NewsTitle,
    NewsDate,
    NewsDescription
} from './NewsElements'

const NewsSection = (props) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    var content = Object.values(props)
    console.log(content)
    return (
        <>
        <NewsContainer id={content[0].id}>

            <SectionWrapper>
                <SectionLabel><LineImg src={Line} /> News &amp; Events <LineImg src={Line} /></SectionLabel>
            </SectionWrapper>

            
            <NewsWrapper>
                {content.map((item, index) => (
                    <NewsRow>
                        <NewsTitle>{item.title}</NewsTitle>
                        <NewsDate>{item.date}</NewsDate>
                        <NewsDescription>{item.description}</NewsDescription>
                    </NewsRow>
                ))}
            </NewsWrapper>

        </NewsContainer>
        </>
    )
}

export default NewsSection
