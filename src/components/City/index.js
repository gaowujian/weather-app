import React from "react"
import { connect } from "react-redux"

import { CHANGE_CITY } from "../../constants/actionTypes"
import { Select, Row } from "antd"
import "antd/dist/antd.css"
import { getCurrentWeather, getWeatherForecast } from "../../actions"
import { CityName } from "./styles"
const { Option } = Select

function City(props) {
  return (
    <div>
      <CityName>
        {props.current.currentCity ? props.current.currentCity : "Sydney"}
      </CityName>
      <Row type="flex" justify="center" align="top">
        <Select
          defaultValue="Sydney"
          style={{ width: 120 }}
          onChange={props.handleChange}
        >
          <Option value="Sydney" >
            Sydney
          </Option>
          <Option value="Melbourne">Melbourne</Option>
          <Option value="Canberra">Canberra</Option>
          <Option value="Perth">Perth</Option>
          <Option value="Adelaide">Adelaide</Option>
        </Select>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => ({
  current: state.currentWeatherReducer
})

const mapDispatchToProps = (dispatch) => ({
  handleChange: (value) => {
    console.log(value)
    dispatch({ type: CHANGE_CITY, data: value })
    dispatch(getCurrentWeather)
    dispatch(getWeatherForecast)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City)
