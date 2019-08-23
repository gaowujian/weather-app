import React from "react";
import { connect } from "react-redux";

import { Wrapper } from "./styles";
import ForecastCard from "../../components/ForecastCard";

import { getWeatherForecast } from "../../actions";





class Forecast extends React.Component {
  componentDidMount() {
    this.props.getForecast();
  }

  render() {
    const { isFetched, data } = this.props.forecasts;
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