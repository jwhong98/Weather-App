import React from 'react'
import { WeatherContainer, WeatherH1, WeatherWrap, WeatherCard, WeatherImg, 
    Temperature, Precipitation } from './WeatherComponents';

const WeatherSection = () => {
    return (
        <WeatherContainer>
            <WeatherH1></WeatherH1>
            <WeatherWrap>
                <WeatherCard>
                    <WeatherImg />
                    <Temperature></Temperature>
                    <Precipitation></Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <WeatherImg />
                    <Temperature></Temperature>
                    <Precipitation></Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <WeatherImg />
                    <Temperature></Temperature>
                    <Precipitation></Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <WeatherImg />
                    <Temperature></Temperature>
                    <Precipitation></Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <WeatherImg />
                    <Temperature></Temperature>
                    <Precipitation></Precipitation>
                </WeatherCard>
            </WeatherWrap>
        </WeatherContainer>
    )
}

export default WeatherSection;
