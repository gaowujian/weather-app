import React, { Component } from "react"

import styled from "styled-components"
import WeatherDetail from "../../components/WeatherDetail"
import City from "../../components/City"
import { connect } from "react-redux"
import { getCurrentWeather } from "../../actions"

const Wrapper = styled.div`
  background: green;
`

class CurrentWeather extends Component {
  componentDidMount() {
    this.props.getCurrent()
  }

  render() {
    const { isFetched, data } = this.props.current
    return (
      <Wrapper>
        {isFetched && (
            <WeatherDetail
              temp={data.temp}
              weatherDes={data.weatherDes}
              humidity={data.humidity}
              windSpeed={data.windSpeed}
            />
          ) }
        {isFetched && <City name={data.name} />}
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => ({
  current: state.currentWeatherReducer
})

const mapDispatchToProps = (dispatch) => ({
  getCurrent: () => dispatch(getCurrentWeather)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrentWeather)
