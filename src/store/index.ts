import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createBrowserHistory } from "history";
import { routerMiddleware, connectRouter } from "connected-react-router";
import { headerReducer } from "./header/reducers"

export const history = createBrowserHistory({
  basename: "/"
});

const rootReducer =
  combineReducers({
    router: connectRouter(history),
    header: headerReducer
  });

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  return createStore(rootReducer, composeWithDevTools());
}
