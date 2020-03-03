
import {
  HeaderState,
  HeaderActionTypes,
  CHANGE_HEADER_VISIBILITY
} from './types'

const initialState: HeaderState = {
  visible: false
}

export function headerReducer(
  state = initialState,
  action: HeaderActionTypes
): HeaderState {
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