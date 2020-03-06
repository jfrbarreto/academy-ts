import {
  ListBodyState,
  ListActionTypes,
  UPDATE_POST_LIST,
  UPDATE_FILTERED_POST_LIST
} from "./types";

const initialState: ListBodyState = {};

export function listBodyReducer(
  state = initialState,
  action: ListActionTypes
): ListBodyState {
  switch (action.type) {
    case UPDATE_POST_LIST:
      return {
        ...state,
        postList: action.payload
      };
    case UPDATE_FILTERED_POST_LIST:
      return {
        ...state,
        filteredPostList: action.payload
      };
    default:
      return state;
  }
}
