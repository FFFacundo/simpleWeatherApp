// src/components/WeatherDisplayer.jsx
const WeatherDisplayer = ({ weather }) => {
    if (!weather) return null;
  
    return (
      <div className="mt-4 p-4 border rounded-md flex flex-col items-center">
        <h2 className="text-4xl font-bold">{weather.name}</h2>
        <p className="text-2xl">Temperature: {weather.main.temp}°C</p>
        <p className="text-2xl">Humidity: {weather.main.humidity}%</p>
        <p className="text-2xl">Weather: {weather.weather[0].description}</p>
      </div>
    );
  };
  
  export default WeatherDisplayer;
  