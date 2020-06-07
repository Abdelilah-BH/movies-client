import { LOGIN, FAILD_LOGIN, REGISTER, FAILD_REGISTER, AUTHENTICATED, NOT_AUTHENTICATED } from "../type";

export const user_reducer = (state = {}, action) => {
  switch (action.type) {
    case AUTHENTICATED:
      return { ...action.payload, error: "" };
    case NOT_AUTHENTICATED:
      return { isAuth: false, error: "" };
    case FAILD_REGISTER:
      return { user: {}, error: action.payload.response.data.message[0].messages[0].message, isAuth: false };
    case REGISTER:
      return { ...action.payload, error: "", isAuth: true };
    case LOGIN:
      return { ...action.payload, error: "", isAuth: true };
    case FAILD_LOGIN:
      return { user: {}, error: "error", isAuth: false };
    default:
      return state;
  }
};