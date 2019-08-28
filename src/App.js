import React from "react"
import CurrentWeather from "./containers/CurrentWeather"
import Forecast from "./containers/Forecast"
import News from "./containers/News"
import { Wrapper } from "./styles"
import Loading from "./Loading.js"
import { connect } from "react-redux"
import { getNews, getCurrentWeather, getWeatherForecast } from "./actions";

class App extends React.Component {
  state = { loading: true }
  sleep = (milliseconds) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds))
  }
  wait = async (milliseconds = 2000) => {
    await this.sleep(milliseconds)
    this.setState({
      name: "Kris",
      company: "sanawat",
      blog: "https://programmingwithmosh.com/author/krissanawat/",
      location: "Chiangmai",
      bio: "JavaScript Developer",
      loading: false
    })
  }
  fetchGitHub = () => {
    fetch("https://api.github.com/users/krissanawat")
      .then((res) => res.json())
      .then((res) => {
        let { name, company, blog, location, bio } = res
        this.setState({
          name: name,
          company: company,
          blog: blog,
          location: location,
          bio: bio,
          loading: false
        })
      })
      .catch((error) => {
        console.log(error)
        this.wait()
      })

  }
  componentDidMount() {
    this.wait(2000)
    this.props.loading()
    // this.fetchGitHub();
  }

  render() {
    if (this.state.loading) return <Loading />
    return (
      <Wrapper id="weather-app">
        <CurrentWeather />
        <Forecast />
        <News />
      </Wrapper>
    )
  }
}


const mapStateToProps = (state) => state;

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
