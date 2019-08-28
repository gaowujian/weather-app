import React from "react"
import CurrentWeather from "./containers/CurrentWeather"
import Forecast from "./containers/Forecast"
import News from "./containers/News"
import { Wrapper } from "./styles"



function App() {
  return (
    <Wrapper id="weather-app">
      <CurrentWeather />
      <Forecast />
      <News />  
    </Wrapper>
  )
}

export default App
