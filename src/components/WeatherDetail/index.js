import React from "react"

import { Row, Col } from "antd"
import { Temperature, WeatherDes } from "./styles"

function WeatherDetail({ temp, weatherDes, humidity, windSpeed }) {
  return (
    <div className="left">
      <Temperature>
        {temp}
        <sup>°</sup>
      </Temperature>
      <WeatherDes>{weatherDes}</WeatherDes>
      <Row>
        <Col span={12} type="flex" justify="center" align="center">
          <h2>Humidity</h2>
          <span>{humidity}</span>
        </Col>
        <Col span={12} type="flex" justify="center" align="center">
          <h2>Wind</h2>
          <span>{windSpeed} K/M</span>
        </Col>
      </Row>
    </div>
  )
}

export default WeatherDetail
