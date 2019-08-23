import { GET_FORECAST } from "../../constants/actionTypes"

const initialState = {
  isFetched: false,
  data: null
}

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FORECAST:
      return { ...state, isFetched: true, data: action.payload }
    default:
      return state
  }
}

export default forecastReducer
