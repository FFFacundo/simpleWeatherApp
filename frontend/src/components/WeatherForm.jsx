// src/components/WeatherForm.jsx
import { useState } from 'react';
import {BiSearch} from 'react-icons/bi'

const WeatherForm = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city) {
      onSearch(city);
      setCity('');
    }

  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-row items-center space-y-1 mx-5">
        
        <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
        className=" px-4 py-2 border rounded-lg focus:outline-none "
        />
        <BiSearch onClick={handleSubmit} size={30}
        className="mx-3 cursor-pointer transition ease-out hover:scale-125"/>
      
    </form>
  );
};

export default WeatherForm;
