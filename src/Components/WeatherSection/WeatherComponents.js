import styled from 'styled-components';

export const WeatherContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 800px;
    background: beige;
    
`

export const WeatherH1 = styled.h1`
    color: black;
    font-size: 2rem;
    display: flex;
    justify-content: center;
    margin: 30px;
`

export const WeatherWrap = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    width: 100%;
    grid-gap: 16px;

`

export const WeatherCard = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 500px;
    padding: 30px;
`

export const Day = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 40px;
`

export const WeatherImg = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 30px;
`

export const Temperature = styled.p`
    font-size: 1rem;
    margin-bottom: 20px;
`

export const Precipitation = styled.p`
    font-size: 1rem;
`