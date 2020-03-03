import { CHANGE_HEADER_VISIBILITY, HeaderActionTypes } from './types'

export function updateHeaderVisibility(newVisibility: boolean): HeaderActionTypes {
  return {
    type: CHANGE_HEADER_VISIBILITY,
    payload: newVisibility
  }
}