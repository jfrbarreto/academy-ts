import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import combinedReducers from './reducers';

export const history = createBrowserHistory({
    basename: '/',
});


const create = () => {
    // const composedEnhancers = composeWithDevTools({ realtime: true, trace: true, traceLimit: 25 });
    return createStore(
            combinedReducers(history),
            // composedEnhancers(
                applyMiddleware(
                    routerMiddleware(history),
                ),
            // ),
        );
};

export default create; 