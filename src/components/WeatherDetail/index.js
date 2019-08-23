import React from "react"


function WeatherDetail({temp,weatherDes,humidity,windSpeed}) {
  return (
    <div className="left">
      <h1>
        {temp}<sup>°</sup>
      </h1>
      <p>{weatherDes}</p>
      <div>
        <h2>Humidity</h2>
        <p>{humidity}</p>
      </div>
      <div>
        <h2>Wind</h2>
        <p>{windSpeed} K/M</p>
      </div>
    </div>
  )
}

export default WeatherDetail
