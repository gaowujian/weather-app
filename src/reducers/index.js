import {combineReducers} from 'redux';
import currentWeatherReducer from "./currentWeatherReducer";
import forecastReducer from "./forecastReducer";
import newsReducer from "./newsReducer"

const rootReducer = combineReducers({
  currentWeatherReducer,
  forecastReducer,
  newsReducer
})

export default rootReducer;