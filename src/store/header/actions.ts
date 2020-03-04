import { CHANGE_HEADER_VISIBILITY, HeaderActionTypes, Routes, HEADER_NAVIGATE } from "./types";

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
