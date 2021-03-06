import { createStore, applyMiddleware, combineReducers, compose, Reducer, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter, RouterState } from "connected-react-router";
import { headerReducer } from "./header/reducers"
import { HeaderState } from "./header/types";
import { listBodyReducer } from "./list/reducers"
import { ListBodyState } from "./list/types";
import { userReducer } from "./user/reducers"
import { UserState } from "./user/types";

export const history = createBrowserHistory({
  basename: "/"
});

export interface AppState {
  router: RouterState;
  header: HeaderState;
  listBody: ListBodyState;
  user: UserState;
}

export const reducers: Reducer<AppState> = combineReducers<AppState>({
  router: connectRouter(history),
  header: headerReducer,
  listBody: listBodyReducer,
  user: userReducer,
});

export default function configureStore(): Store<AppState> {
  return createStore(reducers, composeWithDevTools(
    applyMiddleware(
      routerMiddleware(history)
    ),
  ),);
}
