import React , { useState, useEffect } from 'react';
import { WeatherContainer, WeatherH1, WeatherWrap, WeatherCard, Day, WeatherImg, 
    Temperature, Precipitation } from './WeatherComponents';

const WeatherSection = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    })

    return (
        <WeatherContainer>
            <WeatherH1>{data}</WeatherH1>
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
