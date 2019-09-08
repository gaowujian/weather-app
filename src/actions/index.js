import { GET_CURRENT, GET_FORECAST, GET_NEWS } from "../constants/actionTypes"
import { WEATHER_CURRENT_ENDPOINT, NEWS_TOP_HEADLINE_ENDPOINT, WEATHER_FORECAST_ENDPOINT } from "../endPoints"
import { WEATHER_API_KEY, NEWS_API_KEY } from "../config/keys"
import { fromUnixTime, format } from "date-fns"
import dataShaper from "../helper/dataShaper"
import axios from "axios"

// api format: https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=dd7a88618d8df6c29500943ea9758455
export const getCurrentWeather = async (dispatch, getState) => {
  const state = getState()
  const currentCityId = state.currentWeatherReducer.currentCityId ? state.currentWeatherReducer.currentCityId : "2147714"
  const response = await axios.get(`${WEATHER_CURRENT_ENDPOINT}?id=${currentCityId}&appid=${WEATHER_API_KEY}`)
  let {
    name,
    main: { temp, temp_max, temp_min },
    weather: [{ main: weatherDes, icon }],
    dt,
    timezone
  } = response.data
  const timeStamp = dt + timezone
  const weekday = format(fromUnixTime(timeStamp), "iiii")
  temp = Number(temp - 273.15).toFixed(0)
  temp_max = Number(temp_max - 273.15).toFixed(0)
  temp_min = Number(temp_min - 273.15).toFixed(0)
  icon = String(icon).replace("n", "d")

  const iconSrc = `http://openweathermap.org/img/wn/${icon}@2x.png`
  dispatch({
    type: GET_CURRENT,
    payload: { name, temp, weatherDes, temp_max, temp_min, weekday, iconSrc }
  })
}

// api format: https://api.openweathermap.org/data/2.5/forecast?id=2172797&appid=dd7a88618d8df6c29500943ea9758455

// { weekday, iconSrc, temp, desc }

export const getWeatherForecast = async (dispatch, getState) => {
  const state = getState()
  const currentCityId = state.currentWeatherReducer.currentCityId ? state.currentWeatherReducer.currentCityId : "2147714"
  const response = await axios.get(`${WEATHER_FORECAST_ENDPOINT}?id=${currentCityId}&appid=${WEATHER_API_KEY}`)
  const rawDataList = response.data.list
  const forecasts = dataShaper(rawDataList)
  dispatch({
    type: GET_FORECAST,
    payload: forecasts
  })
}
//  api format: https://newsapi.org/v2/top-headlines?country=au&apiKey=ca1cc463ddcd43939022f3aad58b9252

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
