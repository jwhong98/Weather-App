import './App.css';
import React from 'react'
import NavBar from '../src/Components/Navbar';
import WeatherSection from './Components/WeatherSection';

const App = () => {
  return (
    <div>
      <NavBar />
      <WeatherSection />
    </div>
  )
}

export default App;
