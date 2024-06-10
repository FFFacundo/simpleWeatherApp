import { useState, useEffect } from 'react';
import axios from 'axios';
import WeatherForm from './WeatherForm';
import WeatherDisplayer from './WeatherDisplayer';
import WeatherCard from './WeatherCard.jsx';
import {KEY}  from '../../../server/config.js'

const WeatherApp = () => {
  const [weather, setWeather] = useState(null);
  const[defaultWeather, setDefaultWeather]=useState([])

  const defaultCities = ["Los Angeles", "Tokyo", "Madrid"];

  useEffect(() => {
    const fetchDefaultWeather = async () => {
      const weatherData = await Promise.all(
        defaultCities.map(async (city) => {
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=es`);
            return response.data;
          } catch (error) {
            console.error(`Error fetching weather data for ${city}`, error);
            return null;
          }
        })
      );
      setDefaultWeather(weatherData.filter(data => data !== null));
    };

    fetchDefaultWeather();
  }, []);

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric&lang=es`);
      setWeather(response.data);
      saveSearch(city, response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching weather data", error);
    }
  };

  const saveSearch = async (city, weatherData) => {
    try {
      await axios.post('http://localhost:5000/sh', {
        city,
        country: weatherData.sys.country,
        date: new Date(),
        weather: weatherData,
      });
    } catch (error) {
      console.error("Error saving search data", error);
    }
  };

  return (
    <div className={`mx-auto max-w-screen-lg mt-5 py-10 px-32 bg-gradient-to-br 
    shadow-xl shadow-gray-400 from-emerald-300 from-15% via-blue-500 to-blue-900 to-90% grid grid-cols-2 gap-3`}>
        <div className='col-span-2'>
            <h1 className="mt-2 mr-5 text-3xl font-bold">Consulta tu clima</h1>
        </div>
        <div className='my-1 col-span-'>
            <WeatherForm onSearch={fetchWeather} />
        </div>
        <div className='col-span-3'>
            <WeatherDisplayer weather={weather} />
        </div>
        <div className="px-4 mt-8 grid grid-flow-col col-span-3">
        {defaultWeather.map((weatherData, index) => (
          <WeatherCard key={index} weather={weatherData} />
        ))}
      </div>
    </div>
  );
};

export default WeatherApp;
