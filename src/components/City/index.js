import React from "react"
import { connect } from "react-redux"

import { CHANGE_CITY } from "../../constants/actionTypes"
import { Select } from "antd"
import { getCurrentWeather, getWeatherForecast } from "../../actions"
const { Option } = Select

function City(props) {
  // console.log(props)
  return (
    <div className="right">
      <h1>{props.name}</h1>
      <Select
        defaultValue="Sydney"
        style={{ width: 120 }}
        onChange={props.handleChange}
      >
        <Option value="Melbourne">Melbourne</Option>
        <Option value="Canberra">Canberra</Option>
        <Option value="Perth">Perth</Option>
        <Option value="Adelaide">Adelaide</Option>
      </Select>
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
