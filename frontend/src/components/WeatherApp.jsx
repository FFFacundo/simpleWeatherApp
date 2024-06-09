import { useState } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplayer from './WeatherDisplayer';
import {KEY}  from '../../../server/config.js'

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);

 

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`);
      setWeather(response.data);
      saveSearch(city, response.data);
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const saveSearch = async (city, weatherData) => {
    try {
      await axios.post('http://localhost:5000/sh', {
        city,
        date: new Date(),
        weather: weatherData,
      });
    } catch (error) {
      console.error("Error saving search data", error);
    }
  };

  return (
    <div className={`mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br 
    shadow-xl shadow-gray-400 from-green-400 to-green-700 flex`}>
        <div className=''>
            <h1 className="text-4xl font-bold mb-8">Consulta tu clima</h1>
        </div>
        <div className='my-1'>
            <WeatherForm onSearch={fetchWeather} />
            <WeatherDisplayer weather={weather} />
        </div>
    </div>
  );
};

export default WeatherApp;
