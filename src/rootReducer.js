import {combineReducers} from 'redux';
import currentWeatherReducer from "./containers/CurrentWeather/store/reducer";
import forecastReducer from "./containers/Forecast/store/reducer";
import newsReducer from "./containers/News/store/reducer"

const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastReducer,
  newsReducer
})

export default rootReducer;