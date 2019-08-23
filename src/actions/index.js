import { GET_CURRENT, GET_FORECAST, GET_NEWS } from "../constants/actionTypes"
import {
  WEATHER_CURRENT_ENDPOINT,
  NEWS_TOP_HEADLINE_ENDPOINT,
  WEATHER_FORECAST_ENDPOINT
} from "../endPoints"
import { WEATHER_API_KEY, NEWS_API_KEY } from "../config/keys"
import { parseISO, format } from "date-fns"
const city = "Sydney"

export const getCurrentWeather = (dispatch) => {
  return fetch(`${WEATHER_CURRENT_ENDPOINT}?key=${WEATHER_API_KEY}&q=${city}}`)
    .then((res) => res.json())
    .then((data) => {
      const {
        location: { name },
        current: {
          temp_c: temp,
          humidity,
          wind_kph: windSpeed,
          condition: { text: weatherDes }
        }
      } = data
      dispatch({
        type: GET_CURRENT,
        payload: { name, temp, weatherDes, humidity, windSpeed }
      })
    })
}

const days = 6
export const getWeatherForecast = (dispatch) => {
  return fetch(
    `${WEATHER_FORECAST_ENDPOINT}?key=${WEATHER_API_KEY}&q=${city}&days=${days}`
  )
    .then((res) => res.json())
    .then((data) => {
      const {
        forecast: { forecastday: list }
      } = data
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
    })
}

const country = "au"

export const getNews = (dispatch) => {
  return fetch(
    `${NEWS_TOP_HEADLINE_ENDPOINT}?country=${country}&apiKey=${NEWS_API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      // get the first 5 news
      const news = data.articles.slice(0, 5).map((item) => {
        // console.log(item)
        const {title,description,url,urlToImage} = item
        console.log(title,description,url,urlToImage)
        return ({title,description,url,urlToImage})
      })
      dispatch({
        type: GET_NEWS,
        payload: news
      })
    })
}
