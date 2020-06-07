import { GET_SUBCATEGORIES, FAILD_GET_SUBCATEGORIES } from "../type";

export const subcategory_reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_SUBCATEGORIES:
      return { data: action.payload, error: "" };
    case FAILD_GET_SUBCATEGORIES:
      return { ...state, error: "" };
    default:
      return state;
  }
};