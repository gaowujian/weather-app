import React from "react"
import CurrentWeather from "./containers/CurrentWeather"
import Forecast from "./containers/Forecast"
import News from "./containers/News"
import { Wrapper, Row } from "./styles"
import Loading from "./Loading.js"
import { connect } from "react-redux"
import { getNews, getCurrentWeather, getWeatherForecast } from "./actions"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  componentDidMount() {
    this.props.loading()
    // fake loading
    setTimeout(() => {
      this.setState({ loading: false })
    }, 1000)
  }

  render() {
    if (this.state.loading) return <Loading></Loading>
    return (
      <Wrapper id="weather-app">
        <CurrentWeather />
        <Row>
          <Forecast />
          <News />
        </Row>
      </Wrapper>
    )
  }
}

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  loading: () => {
    dispatch(getCurrentWeather)
    dispatch(getWeatherForecast)
    dispatch(getNews)
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
