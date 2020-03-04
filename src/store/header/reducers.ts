
import {
  HeaderState,
  HeaderActionTypes,
  CHANGE_HEADER_VISIBILITY
} from './types'

const initialState: HeaderState = {
  visible: false,
  title: 'Academy',
  subtitle: 'Tutorial',
  details: 'React + Typescript + Redux'
}

export function headerReducer(
  state = initialState,
  action: HeaderActionTypes
): HeaderState {
/*   console.log('REDUCER!', state, action) */
  switch (action.type) {
    case CHANGE_HEADER_VISIBILITY:
      return {
        ...state,
        visible: action.payload
      }
    default:
      return state
  }
}