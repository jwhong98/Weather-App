import React , { useState, useEffect } from 'react';
import { WeatherContainer, WeatherH1, WeatherWrap, WeatherCard, Day, WeatherImg, 
    Temperature, Precipitation } from './WeatherComponents';

const WeatherSection = () => {
    return (
        <WeatherContainer>
            <WeatherH1>City</WeatherH1>
            <WeatherWrap>
                <WeatherCard>
                    <Day>Day</Day>
                    <WeatherImg />
                    <Temperature>Temp</Temperature>
                    <Precipitation>Precipitation</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>Day</Day>
                    <WeatherImg />
                    <Temperature>Temp</Temperature>
                    <Precipitation>Precipitation</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>Day</Day>
                    <WeatherImg />
                    <Temperature>Temp</Temperature>
                    <Precipitation>Precipitation</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>Day</Day>
                    <WeatherImg />
                    <Temperature>Temp</Temperature>
                    <Precipitation>Precipitation</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>Day</Day>
                    <WeatherImg />
                    <Temperature>Temp</Temperature>
                    <Precipitation>Precipitation</Precipitation>
                </WeatherCard>
            </WeatherWrap>
        </WeatherContainer>
    )
}

export default WeatherSection;
