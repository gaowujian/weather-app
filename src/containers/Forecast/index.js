import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "./styles";
import ForecastCard from "./ForecastCard";

import { getWeatherForecast } from "./store/actionCreators";

class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast();
    console.log("dd")
  }

  render() {
    const { isFetched, data } = this.props.forecasts;
    console.log(isFetched,data)
  
    return (
      <Wrapper>
        {isFetched&&
          data.map(forecast => (
            <ForecastCard
              key={forecast.date_epoch}
              weekday={forecast.date}
              iconSrc={forecast.day.condition.icon}
              temp={forecast.day.avgtemp_c}
              desc={forecast.day.condition.text}
            />
          ))}
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  forecasts: state.forecastReducer
});

const mapDispatchToProps = dispatch => ({
  getForecast: () => dispatch(getWeatherForecast)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast);
