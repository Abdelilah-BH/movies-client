import axios from "axios";
import { GET_CATEGORIES, FAILD_GET_CATEGORIES } from "../type";

const instance = axios.create({
  baseURL: "http://localhost:1337",
  timeout: 12000,
});

export const Get_categories = () => async (dispatch) => {
  try {
    const category = await instance.get("/categories");
    dispatch({
      type: GET_CATEGORIES,
      payload: category.data,
    });
  } catch (err) {
    dispatch({
      type: FAILD_GET_CATEGORIES,
      payload: err,
    });
  }
};
