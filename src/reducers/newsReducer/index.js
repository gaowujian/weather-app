import { GET_NEWS } from "../../constants/actionTypes"

const initialState = {
  isFetched: false,
  data: null
}

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return { ...state, isFetched: true, data: action.payload }
    default:
      return state
  }
}

export default newsReducer
