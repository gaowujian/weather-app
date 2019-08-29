import React, { Component } from "react"
import { connect } from "react-redux"
import { getCurrentWeather, getWeatherForecast } from "../../actions"
import { CHANGE_CITY } from "../../constants/actionTypes"
import { Wrapper, City, WeatherCondition, Temperature, Weekday, MaxTemp, MinTemp, Today} from "./styles"

// name, temp, weatherDes,temp_max, temp_min, weekday
class CurrentWeather extends Component {
  componentDidMount() {
    // this.props.getCurrent()
  }
  render() {
    const { isFetched, data } = this.props.current
    return (
      <Wrapper>
        <div className="vertical">
          <City>{isFetched ? data.name : ""}</City>
          <select defaultValue="Sydney" style={{ width: 120 }} onChange={this.props.changeCity}>
            <option value="2147714">Sydney</option>
            <option value="2158177">Melbourne</option>
            <option value="2172517">Canberra</option>
            <option value="2063523">Perth</option>
            <option value="2078025">Adelaide</option>
          </select>
          <WeatherCondition>{isFetched ? data.weatherDes : ""}</WeatherCondition>
          <Temperature>{isFetched ? data.temp : ""}</Temperature>
        </div>
        <div className="horizontal">
          <div>
            <Weekday>{isFetched ? data.weekday : ""}</Weekday>
            <Today>Today</Today>
          </div>
          <div>
            <MaxTemp>{isFetched ? data.temp_max : ""}</MaxTemp>
            <MinTemp>{isFetched ? data.temp_min : ""}</MinTemp>
          </div>
        </div>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  current: state.currentWeatherReducer
})

const mapDispatchToProps = (dispatch) => ({
  getCurrent: () => dispatch(getCurrentWeather),
  changeCity: (e) => {
    dispatch({ type: CHANGE_CITY, data: e.target.value })
    dispatch(getCurrentWeather)
    dispatch(getWeatherForecast)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather)
