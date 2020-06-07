import axios from "axios";
import { GET_SUBCATEGORIES, FAILD_GET_SUBCATEGORIES } from "../type";

const instance = axios.create({
  baseURL: "http://localhost:1337",
  timeout: 12000,
});

export const Get_subcategories = () => async (dispatch) => {
  try {
    const sub_category = await instance.get("/subcategories");
    dispatch({
      type: GET_SUBCATEGORIES,
      payload: sub_category.data,
    });
  } catch (err) {
    dispatch({
      type: FAILD_GET_SUBCATEGORIES,
      payload: err,
    });
  }
};
