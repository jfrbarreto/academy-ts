import { createStore, applyMiddleware, combineReducers, compose, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter, RouterState } from "connected-react-router";
import { headerReducer } from "./header/reducers"
import { HeaderState } from "./header/types";

export const history = createBrowserHistory({
  basename: "/"
});

export interface AppState {
  router: RouterState;
  header: HeaderState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  router: connectRouter(history),
  header: headerReducer,
});

export default function configureStore(): Store<AppState> {
  return createStore(reducers, composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    ),
  ),);
}
