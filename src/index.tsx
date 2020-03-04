import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
import Home from "./Home";
import List from "./List";
import NavError from "./NavError";

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={List} />
          <Route render={() => <NavError/>} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
