import React from 'react';
import CurrentWeather from './containers/CurrentWeather';
import Forecast from './containers/Forecast';
import News from './containers/News';


function App() {
  return (
    <div id="weather-app">
      <CurrentWeather />
      <Forecast />
      <News/>
    </div>
  );
}

export default App;
