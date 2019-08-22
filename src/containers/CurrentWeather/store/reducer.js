import { GET_CURRENT } from "./actionTypes";

const initialState = {
  isFetched: false,
  data: null
}

const currentWeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT:
      return { ...state, isFetched: true, data: action.payload }
    default:
      return state
  }
}

export default currentWeatherReducer
