import React from "react"


function WeatherDetail({temp,weatherDes,humidity,windSpeed}) {
  return (
    <div className="left">
      <p>
        {temp}<sup>°</sup>
      </p>
      <p>{weatherDes}</p>
      <span>Humidity {humidity}%</span>
      <span>Wind {windSpeed} K/M</span>
    </div>
  )
}

export default WeatherDetail
