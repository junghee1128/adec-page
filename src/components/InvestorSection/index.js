import React, { useState } from 'react'
import Line from '../../images/line.png'
import Chart from '../../images/chart.png'
import Floater from 'react-floater';
import {
    SectionWrapper,
    SectionLabel,
    LineImg,
    InvestorContainer,
    InvestorWrapper,
    InvestorRow,
    InvestorPhrase,
    InvestorChartWrapper,
    InvestorChart,
    AreaFloaters
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
                        <InvestorChart src={Chart} useMap="#image-map" />
                        <map name="image-map" id="image-map">


                            {/* <Floater title="Events" event="click" placement="center"
                                content={
                                    <div> I can be triggered by click or hover (on devices with a mouse) </div>
                                }
                            >
                                <AreaFloaters target="" alt="investor-overview" coords="334,336,86" shape="circle" />
                            </Floater> */}

                            
                            <Floater title="ICFI (Common Stock)" event="hover" placement="center"
                                content={
                                    <table className="stock-information">
                                        <tr>
                                            <td>Exchange</td>
                                            <td>NASDAQ</td>
                                        </tr>
                                        <tr>
                                            <td>Price</td>
                                            <td>$74.18</td>
                                        </tr>
                                        <tr>
                                            <td>Change (%)</td>
                                            <td>+2.24(+3.11%)</td>
                                        </tr>
                                        <tr>
                                            <td>Volume</td>
                                            <td>147,654</td>
                                        </tr>
                                        <tr>
                                            <td>53 Week High</td>
                                            <td>$82.25</td>
                                        </tr>
                                        <tr>
                                            <td>52 Week Low</td>
                                            <td>$50.10</td>
                                        </tr>
                                        <tr>
                                            <td>Market Cap</td>
                                            <td>$1,389,237,136.56</td>
                                        </tr>
                                        <tr>
                                            <td>PE Ratio</td>
                                            <td>$19.86</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2">Data as of 11/12/18 4:00 PM EST</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><a to="">View More</a></td>
                                        </tr>
                                    </table>
                                }
                            >
                                <AreaFloaters target="" alt="stock-information" coords="96,96,78" shape="circle" />
                            </Floater>


                            <Floater event="hover" placement="center"
                                content={
                                    <table className="recent-news">
                                        <tr>
                                            <td>Date</td>
                                            <td>Title</td>
                                        </tr>
                                        <tr>
                                            <td>11/02/18</td>
                                            <td>ICF Reports Third Quarter 2018 Results</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><a to="">View More</a></td>
                                        </tr>
                                    </table>
                                }
                            >
                                <AreaFloaters target="" alt="recent-news" coords="573,97,77" shape="circle" />
                            </Floater>


                            <Floater event="hover" placement="center"
                                content={
                                    <table className="upcoming-events">
                                        <tr>
                                            <td>Date</td>
                                            <td>Title</td>
                                        </tr>
                                        <tr>
                                            <td>11/01/18 4:30 PM EDT11/01/18 4:30 PM EDT</td>
                                            <td>Q3 2018 ICF Earnings Conference Call </td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><a to="">View More</a></td>
                                        </tr>
                                    </table>
                                }
                            >
                                <AreaFloaters target="" alt="upcoming-events" coords="673,335,77" shape="circle" />
                            </Floater>


                            <Floater event="hover" placement="center"
                                content={
                                    <table className="recent-presentations">
                                        <tr>
                                            <td>Date</td>
                                            <td>Title</td>
                                        </tr>
                                        <tr>
                                            <td>11/01/18</td>
                                            <td>ICF Investor Presentation</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><a to="">View More</a></td>
                                        </tr>
                                    </table>
                                }
                            >
                                <AreaFloaters target="" alt="recent-presentations" coords="573,574,78" shape="circle" />
                            </Floater>


                            <Floater event="hover" placement="center"
                                content={
                                    <table className="selected-fillings">
                                        <tr>
                                            <td>Date</td>
                                            <td>Form</td>
                                            <td>Title</td>
                                        </tr>
                                        <tr>
                                            <td>11/02/18</td>
                                            <td>10-Q</td>
                                            <td>Quarterly report which provides a continuing view of a company's financial position</td>
                                        </tr>
                                        <tr>
                                            <td colspan="2"><a to="">View More</a></td>
                                        </tr>
                                    </table>
                                }
                            >
                                <AreaFloaters target="" alt="selected-fillings" coords="96,574,77" shape="circle" />
                            </Floater>
                        </map>
                    </InvestorChartWrapper>

                </InvestorRow>
            </InvestorWrapper>
        </InvestorContainer>
        </>
    )
}

export default InvestorSection