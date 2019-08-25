import { GET_CURRENT, CHANGE_CITY } from "../../constants/actionTypes"

const initialState = {
  isFetched: false,
  currentCity: null,
  data: null
}

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT:
      return { ...state, isFetched: true, data: action.payload }
    case CHANGE_CITY:
      return { ...state, currentCity: action.data }
    default:
      return state
  }
}

export default currentWeatherReducer
