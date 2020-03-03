import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' 
import { ConnectedRouter } from 'connected-react-router'
import configureStore, { history } from './store/index'

import App from "./App";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
      <> 
        <Switch>
          <Route exact path="/" component={App} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)