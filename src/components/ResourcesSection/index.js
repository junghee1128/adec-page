import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import Line from '../../images/line.png'
import Slider from 'react-animated-slider'
import horizontalCss from 'react-animated-slider/build/horizontal.css';
import * as FontAwesomeIcon from 'react-icons/fa'
import {
    SectionWrapper,
    SectionLabel,
    LineImg,
    ResourcesContainer,
    ResourcesWrapper,
    ResourcesRow,
    ResourcesTitle,
    ResourcesDescription,
    ResourcesContent
} from './ResourcesElements'

const ResourcesSection = (props) => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    var content = Object.values(props)
    // console.log(content)
    return (
        <>
        <ResourcesContainer id={content[0].id}>

            <SectionWrapper>
                <SectionLabel><LineImg src={Line} /> Case Studies <LineImg src={Line} /></SectionLabel>
            </SectionWrapper>

            <ResourcesWrapper>
                <ResourcesRow>

                    <Slider classNames={horizontalCss}  autoplay={3000}>
                        {content.map((item, index) => (
                            <div className="inner">
                            <ResourcesTitle>{item.title}</ResourcesTitle>
                            <ResourcesDescription>{item.description}</ResourcesDescription>
                            <ResourcesContent>{(item.content.length > 150) ? item.content.substring(0,150) + "..." : item.content}</ResourcesContent>
                            <Button to='resources' onMouseEnter={onHover} onMouseLeave={onHover} >
                                {item.button} <FontAwesomeIcon.FaArrowRight />
                            </Button>
                            </div>
                        ))}
                    </Slider>

                </ResourcesRow>
            </ResourcesWrapper>
        </ResourcesContainer>
        </>
    )
}

export default ResourcesSection
