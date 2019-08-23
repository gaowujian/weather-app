import { GET_CURRENT,GET_FORECAST,GET_NEWS } from "../constants/actionTypes"
import { WEATHER_CURRENT_ENDPOINT,NEWS_TOP_HEADLINE_ENDPOINT,WEATHER_FORECAST_ENDPOINT } from "../endPoints"
import { WEATHER_API_KEY,NEWS_API_KEY } from "../config/keys"
const city = "Sydney"

// https://api.apixu.com/v1/current.json?key=6a834f81674246d5bbb93637190108&q=Paris
export const getCurrentWeather = (dispatch) => {
  return fetch(`${WEATHER_CURRENT_ENDPOINT}?key=${WEATHER_API_KEY}&q=${city}}`)
    .then((res) => res.json())
    .then(data => {
      const {location:{name},current:{temp_c:temp,humidity,wind_kph:windSpeed,condition:{text:weatherDes}}} = data
      dispatch({
        type: GET_CURRENT,
        payload: {name,temp,weatherDes,humidity,windSpeed}
      });
    })

}


const days = 6
export const getWeatherForecast =  (dispatch) =>{

  return fetch(`${WEATHER_FORECAST_ENDPOINT}?key=${WEATHER_API_KEY}&q=${city}&days=${days}`)
  .then((res) => res.json())
  .then(data => {
    const {forecast:{forecastday:list}} = data
    const dataList = list.slice(1,days)
    dispatch({
      type: GET_FORECAST,
      payload: dataList
    });
  })

}

const country = "au"

export const getNews = (dispatch) => {
  return fetch(`${NEWS_TOP_HEADLINE_ENDPOINT}?country=${country}&apiKey=${NEWS_API_KEY}`)
    .then((res) => res.json())
    .then(data => {
      // get the first 5 news
      dispatch({
        type: GET_NEWS,
        payload: data.articles.slice(0,5)
      });
    })

}