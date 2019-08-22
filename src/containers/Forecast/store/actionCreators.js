import { GET_FORECAST } from './actionTypes';
import { WEATHER_FORECAST_ENDPOINT } from "../../../endPoints";
import { WEATHER_API_KEY } from "../../../keys"
const CITY_NAME = 'Sydney'
const days = 6
export const getWeatherForecast =  (dispatch) =>{

  return fetch(`${WEATHER_FORECAST_ENDPOINT}?key=${WEATHER_API_KEY}&q=${CITY_NAME}&days=${days}`)
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