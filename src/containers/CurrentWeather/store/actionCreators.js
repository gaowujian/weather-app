import { GET_CURRENT } from "./actionTypes"
import { WEATHER_CURRENT_ENDPOINT } from "../../../endPoints"
import { WEATHER_API_KEY } from "../../../keys"
const CITY_NAME = "Sydney"

export const getCurrentWeather = (dispatch) => {
  return fetch(`${WEATHER_CURRENT_ENDPOINT}?key=${WEATHER_API_KEY}&q=${CITY_NAME}`)
    .then((res) => res.json())
    .then(data => {
      const {location:{name},current:{temp_c:temp,wind_kph:windSpeed,humidity,condition:{text:weatherDes}}} = data
      dispatch({
        type: GET_CURRENT,
        payload: {name,temp,windSpeed,humidity,weatherDes}
      });
    })

}


