import {
  FETCH_FILMS_START,
  FETCH_FILMS_SUCCESS,
  FETCH_FILMS_FAIL,
} from "../actions/actionCreator";

const initialState = {
  movies: [],
  error: "",
  isFetching: false
};

export const reducer = (state = initialState, action) => {
  console.log("reducer", action);
  switch (action.type) {
    case FETCH_FILMS_START:
      return {
        ...state,
        isFetching: true,
        error: "",
      };
    case FETCH_FILMS_SUCCESS:
      return {
        ...state,
        movies: action.payload,
        isFetching: false,
        error: "",
      };
    case FETCH_FILMS_FAIL:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
