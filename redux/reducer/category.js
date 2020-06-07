import { GET_CATEGORIES, FAILD_GET_CATEGORIES } from "../type";

export const category_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return { data: action.payload, error: "" };
    case FAILD_GET_CATEGORIES:
      return { ...state, error: "" };
    default:
      return state;
  }
};