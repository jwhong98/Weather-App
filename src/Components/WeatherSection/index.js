import React , { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherContainer, WeatherH1, WeatherWrap, WeatherCard, Day, WeatherImg, 
    Temperature, Precipitation } from './WeatherComponents';

const WeatherSection = (props) => {
    const city = props.city;
    const apiKey = 'YOUR_API_KEY';
    const url = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey +"&units=imperial";
    const [data, setData] = useState(null);
    // const imageURL = 'http://openweathermap.org/img/wn/';
    
    useEffect(() => {
        axios
            .get(url)
            .then(res => {
                setData(res.data);       
            }).catch(error => alert('Error'))
    })

    if(data){
    return (
  
        <WeatherContainer>
            <WeatherH1>{data.city.name}</WeatherH1>
            <WeatherWrap>
                <WeatherCard>
                    <Day> {data.list[0].dt_txt}</Day>
                    <WeatherImg />
                    <Temperature> {data.list[0].main.temp} F</Temperature>
                    <Precipitation>{data.list[0].pop} %</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>{data.list[1].dt_txt}</Day>
                    <WeatherImg />
                    <Temperature> {data.list[1].main.temp} F</Temperature>
                    <Precipitation>{data.list[1].pop}%</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>{data.list[2].dt_txt}</Day>
                    <WeatherImg />
                    <Temperature> {data.list[2].main.temp} F</Temperature>
                    <Precipitation>{data.list[2].pop}%</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>{data.list[3].dt_txt}</Day>
                    <WeatherImg />
                    <Temperature> {data.list[3].main.temp} F</Temperature>
                    <Precipitation>{data.list[3].pop}%</Precipitation>
                </WeatherCard>
                <WeatherCard>
                    <Day>{data.list[4].dt_txt}</Day>
                    <WeatherImg />
                    <Temperature> {data.list[4].main.temp} F</Temperature>
                    <Precipitation>{data.list[4].pop}%</Precipitation>
                </WeatherCard>
            </WeatherWrap>
        </WeatherContainer>
    )
    }
    return(
        <div>

        </div>
    )
}

export default WeatherSection;
