import React from "react"
import CurrentWeather from "./containers/CurrentWeather"
import Forecast from "./containers/Forecast"
import News from "./containers/News"
import { Wrapper } from "./styles"
import { Row, Col } from "antd"

function App() {
  return (
    <Wrapper id="weather-app">
      <CurrentWeather />
      <Row type="flex">
        <Col xs={24} sm={{ span: 16, order: 2 }}>
          <Forecast />
        </Col>
        <Col xs={24} sm={{ span: 8, order: 1 }}>
          <News />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default App
