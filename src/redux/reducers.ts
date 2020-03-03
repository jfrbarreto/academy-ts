import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const combinedReducers = (history: any) => combineReducers({
  router: connectRouter(history)
})
export default combinedReducers