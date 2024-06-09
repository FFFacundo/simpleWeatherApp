// src/components/WeatherDisplayer.jsx
const WeatherDisplayer = ({ weather }) => {
    if (!weather) return null;
  
    return (
      <div className="ml-5 mt-4 mr-5 p-4 border rounded-md flex flex-col items-center bg-gradient-to-br 
    shadow-xl shadow-gray-400 from-gray-300 to-gray-500">
        <h2 className="text-4xl font-bold">{weather.name}, {weather.sys.country}</h2>
        <p className="text-2xl">Temperature: {weather.main.temp}°C</p>
        <p className="text-2xl">Humidity: {weather.main.humidity}%</p>
        <p className="text-2xl">Weather: {weather.weather[0].description}</p>
      </div>
    );
  };
  
  export default WeatherDisplayer;
  