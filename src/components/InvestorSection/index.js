import React, { useState } from 'react'
import Line from '../../images/line.png'
import Chart from '../../images/chart.png'
import {
    SectionWrapper,
    SectionLabel,
    LineImg,
    InvestorContainer,
    InvestorWrapper,
    InvestorRow,
    InvestorPhrase,
    InvestorChartWrapper,
    InvestorChart
} from './InvestorElements'

function InvestorSection({ id, phrase }) {
    return (
        <>
        <InvestorContainer id={id}>

            <SectionWrapper>
                <SectionLabel><LineImg src={Line} /> Investor Overview <LineImg src={Line} /></SectionLabel>
                

                <InvestorPhrase>
                    {phrase}
                </InvestorPhrase>
            </SectionWrapper>

            <InvestorWrapper>
                <InvestorRow>

                    <InvestorChartWrapper>
                        <InvestorChart src={Chart} />
                    </InvestorChartWrapper>

                </InvestorRow>
            </InvestorWrapper>
        </InvestorContainer>
        </>
    )
}

export default InvestorSection
