import { GET_CURRENT, GET_FORECAST, GET_NEWS } from "../constants/actionTypes"
import { WEATHER_CURRENT_ENDPOINT, NEWS_TOP_HEADLINE_ENDPOINT, WEATHER_FORECAST_ENDPOINT } from "../endPoints"
import { WEATHER_API_KEY, NEWS_API_KEY } from "../config/keys"
import { parseISO, format } from "date-fns"
import axios from "axios"

export const getCurrentWeather = async (dispatch, getState) => {
  const state = getState()
  const currentCity = state.currentWeatherReducer.currentCity ? state.currentWeatherReducer.currentCity : "Sydney"

  const response = await axios.get(`${WEATHER_CURRENT_ENDPOINT}?key=${WEATHER_API_KEY}&q=${currentCity}}`)
  const {
    location: { name },
    current: {
      temp_c: temp,
      humidity,
      wind_kph: windSpeed,
      condition: { text: weatherDes }
    }
  } = response.data
  dispatch({
    type: GET_CURRENT,
    payload: { name, temp, weatherDes, humidity, windSpeed }
  })
}

export const getWeatherForecast = async (dispatch, getState) => {
  const state = getState()
  const currentCity = state.currentWeatherReducer.currentCity ? state.currentWeatherReducer.currentCity : "Sydney"
  const days = 6
  const response = await axios.get(`${WEATHER_FORECAST_ENDPOINT}?key=${WEATHER_API_KEY}&q=${currentCity}&days=${days}`)

  const {
    forecast: { forecastday: list }
  } = response.data
  const forecasts = list.slice(1, days).map((item) => {
    const {
      date,
      day: {
        condition: { icon: iconSrc, text: desc },
        avgtemp_c: temp
      }
    } = item
    const weekdayObj = parseISO(date)
    const weekday = format(weekdayObj, "iii")
    return { weekday, iconSrc, temp, desc }
  })
  dispatch({
    type: GET_FORECAST,
    payload: forecasts
  })
}

export const getNews = async (dispatch) => {
  const country = "au"
  const response = await axios.get(`${NEWS_TOP_HEADLINE_ENDPOINT}?country=${country}&apiKey=${NEWS_API_KEY}`)
  const news = response.data.articles.slice(0, 5).map((item) => {
    const { title, description, url, urlToImage } = item
    return { title, description, url, urlToImage }
  })
  dispatch({
    type: GET_NEWS,
    payload: news
  })
}
