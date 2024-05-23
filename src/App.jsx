import "./App.css";
import WeatherIcon from "./components/WeatherIcon";
import SearchIcon from "./assets/search.png";
import ClearSky from "./assets/sun.png";
import FewCloud from "./assets/cloud.png";
import ScatterdClouds from "./assets/scatter-cloud.png";
import BrokenCloud from "./assets/broken-cloud.png";
import ShowerRain from "./assets/drizzle.png";
import Rain from "./assets/rain.png";
import ThunderStorm from "./assets/thunder-storm.png";
import Snow from "./assets/snow.png";
import Mist from "./assets/mist.png";

import React, { useEffect, useState } from "react";
import getWeather from "./api/apiCall";
import LoadingComponent from "./components/LoadingComponent";

export const PropsContext = React.createContext();

function App() {
  const [icon, setIcon] = useState(null);
  const [lat, setLat] = useState(0);
  const [log, setLog] = useState(0);
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [wind, setWind] = useState(0);
  const [city, setCity] = useState("Chennai");
  const [inputCity, setInputCity] = useState(city);
  const [country, setCountry] = useState("IN");
  const [isLoading, setIsLoading] = useState(false);
  const [cityNotFound, setCityNotFound] = useState(false);

  useEffect(() => {
    search();
  }, []);

  const weatherIcon = {
    "01d": ClearSky,
    "01n": ClearSky,
    "02d": FewCloud,
    "02n": FewCloud,
    "03d": ScatterdClouds,
    "03n": ScatterdClouds,
    "04d": BrokenCloud,
    "04n": BrokenCloud,
    "09d": ShowerRain,
    "09n": ShowerRain,
    "10d": Rain,
    "10n": Rain,
    "11d": ThunderStorm,
    "11n": ThunderStorm,
    "13d": Snow,
    "13n": Snow,
    "50d": Mist,
    "50n": Mist,
  };

  const search = async () => {
    setIsLoading(true);
    setCityNotFound(false);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=e085cca3e16360d75ce58fb17d0cb617&units=Metric`;
    let response = await getWeather(url);
    // console.log("response received in app JS:", response);
    if (response.cod == "404") {
      setCityNotFound(response.message);
      setIsLoading(false);
      return;
    }

    let iconResponse = response.weather[0].icon;
    setIcon(weatherIcon[iconResponse]);
    setLat(response.coord.lat);
    setLog(response.coord.lon);
    setTemp(Math.floor(response.main.temp));
    setHumidity(response.main.humidity);
    setWind(response.wind.speed);
    setCountry(response.sys.country);
    setCity(response.name);
    setIsLoading(false);
  };

  const handleCity = (e) => {
    setInputCity(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) search();
  };

  return (
    <>
      <PropsContext.Provider
        value={{
          icon,
          lat,
          log,
          humidity,
          temp,
          wind,
          city,
          country,
        }}
      >
        <div className="container">
          <div className="input-container">
            <input
              type="text"
              className="input-search"
              placeholder="Search city"
              onChange={handleCity}
              value={inputCity}
              onKeyDown={handleEnter}
            />
            <div className="icon-container" onClick={() => search()}>
              <img src={SearchIcon} alt="Search" />
            </div>
          </div>
          {isLoading && <LoadingComponent/>}
          {cityNotFound && <div className="city-not-found">{cityNotFound}</div>}
          {!isLoading && !cityNotFound && <WeatherIcon />}
        </div>
      </PropsContext.Provider>
    </>
  );
}

export default App;
