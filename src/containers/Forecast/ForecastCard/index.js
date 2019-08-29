import React from "react"
import { Wrapper, Weekday, WeatherIcon, Temperature, WeatherDesc } from "./styles"

const ForecastCard = ({ weekday, iconSrc, temp, desc }) => {
  return (
    <Wrapper>
      <Weekday>{weekday}</Weekday>
      <WeatherIcon src={iconSrc} />
      <Temperature>
        {temp}
        <sup>°</sup>C
      </Temperature>
      <WeatherDesc>{desc}</WeatherDesc>
    </Wrapper>
  )
}
export default ForecastCard
