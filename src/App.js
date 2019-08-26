import React from "react"
import CurrentWeather from "./containers/CurrentWeather"
import Forecast from "./containers/Forecast"
import News from "./containers/News"
import { Wrapper, CustomizedRow } from "./styles"
import { Col } from "antd"


function App() {
  return (
    <Wrapper id="weather-app">
      <CurrentWeather />
      <CustomizedRow type="flex">
        <Col xs={24} sm={{ span: 16, order: 2 }} className="col">
          <Forecast />
        </Col>
        <Col xs={24} sm={{ span: 8, order: 1 }} className="col">
          <News />
        </Col>
      </CustomizedRow>
    </Wrapper>
  )
}

export default App
