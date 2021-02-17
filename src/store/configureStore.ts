import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { composeWithDevTools } from "redux-devtools-extension";
import createRootReducer from "./rootReducer";

export const history = createBrowserHistory();

const middlewares = [thunk];

const store = createStore(
  createRootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
