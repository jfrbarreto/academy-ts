import { UserState, UserActionTypes, UPDATE_USER_ON_EDIT } from "./types";

const initialState: UserState = { userOnEdit : null };

export function userReducer(
  state = initialState,
  action: UserActionTypes
): UserState {
  /*   console.log('REDUCER!', state, action) */
  switch (action.type) {
    case UPDATE_USER_ON_EDIT:
      return {
        ...state,
        userOnEdit: action.user
      };
    default:
      return state;
  }
}
