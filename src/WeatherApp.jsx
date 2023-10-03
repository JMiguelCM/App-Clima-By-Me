import { useGetWeather } from "./helper/useGetWeather";

export const WeatherApp = () => {
  const { ciudad, dataClima, handleCambioCiudad, handleSubmit } = useGetWeather();
  const difKelvin = 273.15;

  return (
    <div className="container">
      <h1>Aplicación Clima</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambioCiudad} />
        <button type="submit">Buscar</button>
      </form>
      {dataClima && (
        <div className="container-info">
          <h2>{dataClima.sys.country}</h2>
          <h3>{dataClima.name}</h3>
          <p>Temperatura: {parseInt(dataClima?.main.temp - difKelvin)}°C</p>
          <p>Condicion Meteorologica: {dataClima.weather[0].description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}
            alt=""
          />
        </div>
      )}
    </div>
  );
};
