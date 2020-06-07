import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunkMiddleware from "redux-thunk";
import { user_reducer } from "./redux/reducer/user";
import { category_reducer } from "./redux/reducer/category";
import { subcategory_reducer } from "./redux/reducer/subcategory";
import { movie_reducer } from "./redux/reducer/movie";

const InitialState = {
  user: {},
  categories: { data: [] },
  sub_categories: { data: [] },
  movie: { data: {} },
};

const reducers = combineReducers({
  user: user_reducer,
  categories: category_reducer,
  sub_categories: subcategory_reducer,
  movie: movie_reducer,
});

export const initializeStore = (initialState = InitialState) => {
  return createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
};
