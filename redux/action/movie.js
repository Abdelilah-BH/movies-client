import axios from "axios";
import { GET_MOVIE, FAILD_GET_MOVIE } from "../type";

const instance = axios.create({
  baseURL: "http://localhost:1337",
  timeout: 12000,
});

export const Get_movie = id => async (dispatch) => {
  try {
    const movie = await instance.get(`/movies/${id}`);
    dispatch({
      type: GET_MOVIE,
      payload: movie.data,
    });
  } catch (err) {
    dispatch({
      type: FAILD_GET_MOVIE,
      payload: err,
    });
  }
};
