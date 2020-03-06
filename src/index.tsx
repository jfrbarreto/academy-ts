import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router";
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./store/configureStore";
import Home from "./screens/Home";
import List from "./screens/List";
import ListDetails from "./screens/List/Details";
import User from "./screens/User";
import Todo from "./screens/Todo";
import UserCreate from "./screens/User/Create";
import NavError from "./screens/_shared/404";
import { initLocalDB } from "./lib/localstorage"

initLocalDB();

ReactDOM.render(
  <Provider store={configureStore()}>
    <ConnectedRouter history={history}>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/list" component={List} />
          <Route exact path="/list-details" component={ListDetails} />
          <Route exact path="/user" component={User} />
          <Route exact path="/user-create" component={UserCreate} />
          <Route exact path="/todo" component={Todo} />
          <Route render={() => <NavError/>} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);
