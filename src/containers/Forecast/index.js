import React from "react"
import { connect } from "react-redux"

import { Wrapper } from "./styles"
import ForecastCard from "./ForecastCard"

import { getWeatherForecast } from "../../actions"


class Forecast extends React.Component {
  componentDidMount() {
    // this.props.getForecast()
  }

  render() {
    const { isFetched, data } = this.props.forecasts
    return (
      <Wrapper className="forecast">
        {isFetched &&
          data.map((forecast) => (
            <ForecastCard
              key={forecast.timeStamp}
              weekday={forecast.weekday}
              iconSrc={forecast.iconSrc}
              temp={forecast.temp}
              desc={forecast.desc}
            />
          ))}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  forecasts: state.forecastReducer
})

const mapDispatchToProps = (dispatch) => ({
  getForecast: () => dispatch(getWeatherForecast)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast)
