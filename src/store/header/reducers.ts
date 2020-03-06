
import {
  HeaderState,
  HeaderActionTypes,
  CHANGE_HEADER_VISIBILITY,
  UPDATE_FILTER_VALUE
} from './types'

const initialState: HeaderState = {
  visible: false,
  title: 'Academy',
  subtitle: 'Tutorial',
  details: 'React + Typescript + Redux',
  filterValue: ''
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
      case UPDATE_FILTER_VALUE:
        return {
          ...state,
          filterValue: action.value
        }
    default:
      return state
  }
}