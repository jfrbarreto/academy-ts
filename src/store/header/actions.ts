import { CHANGE_HEADER_VISIBILITY, UPDATE_FILTER_VALUE, HeaderActionTypes, Routes, HEADER_NAVIGATE } from "./types";

export function updateHeaderVisibility(
  newVisibility: boolean
): HeaderActionTypes {
  return {
    type: CHANGE_HEADER_VISIBILITY,
    payload: newVisibility
  };
}

export function headerNavigate(
  route: Routes
): HeaderActionTypes {
  return {
    type: HEADER_NAVIGATE,
    route: route
  };
}

export function updateFilterValue(
  value: string
): HeaderActionTypes {
  return {
    type: UPDATE_FILTER_VALUE,
    value: value
  };
}
