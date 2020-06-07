import { GET_MOVIE, FAILD_GET_MOVIE } from "../type";

export const movie_reducer = (state= {}, action) => {
  switch(action.type) {
    case GET_MOVIE:
      return { ...state, data: action.payload, error: "" };
    case FAILD_GET_MOVIE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
