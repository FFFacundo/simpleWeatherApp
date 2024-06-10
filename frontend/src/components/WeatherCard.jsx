const WeatherCard = ({ weather }) => {
    if (!weather) return null;
  
    return (
      <div className="ml-1 mt-4 mr-1 p-4 border rounded-md flex flex-col items-start justify-evenly bg-gradient-to-br 
    shadow-xl shadow-gray-900 from-gray-400 via-gray-300 to-gray-600 w-auto h-auto ">
        <h2 className="text-4xl font-bold">{weather.name}, {weather.sys.country}</h2>
        <p className="text-2xl">Temperatura: {weather.main.temp}°C</p>
        <p className="text-2xl">Humedad: {weather.main.humidity}%</p>
        <p className="text-2xl">Descripcion: {weather.weather[0].description}</p>
      </div>
    );
  };
  
  export default WeatherCard;
  