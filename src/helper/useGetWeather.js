import {useState} from "react";

export const useGetWeather = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "2c443b466eedd0426d81d1fc922839bd";

  const [ciudad, setCiudad] = useState("");

  const [dataClima, setDataClima] = useState(null);

  const handleCambioCiudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      setDataClima(data);
    } catch (error) {
      console.error("Ocurrió el siguiente problema: ", error);
    }
  };
  return {
    ciudad,
    dataClima,
    handleCambioCiudad,
    handleSubmit
  };
};
