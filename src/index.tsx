import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router' 
import { ConnectedRouter } from 'connected-react-router'
import create, { history } from './redux/store'

const store = create();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}> 
      <> 
        <Switch>
          <Route exact path="/" render={() => (<div>Match</div>)} />
          <Route render={() => (<div>Miss</div>)} />
        </Switch>
      </>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)