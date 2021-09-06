import React, { useState } from 'react'
import { Button } from '../ButtonElements'
import {
    SectionContainer,
    SectionWrapper,
    SectionRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img
    // SectionHeading,
    // SectionSubtitle
} from './SecondElements'

function SecondSection({lightBg, id, topline, heading, subtitle, buttonLabel, imgsrc, alt}) {
    return (
        <>
        <SectionContainer lightBg={lightBg} id={id}>
            <SectionWrapper>

                <SectionRow>
                    <Column1>
                        <TextWrapper>
                            <TopLine>{topline}</TopLine>
                            <Heading>{heading}</Heading>
                            <Subtitle>{subtitle}</Subtitle>

                            <BtnWrap>
                                <Button to='home'>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>

                    <Column2>
                        <ImgWrap><Img src={imgsrc} alt={alt} /></ImgWrap>
                    </Column2>
                </SectionRow>

            </SectionWrapper>
        </SectionContainer>  
        </>
    )
}

export default SecondSection
