import { UPDATE_USER_ON_EDIT, UserActionTypes, User } from "./types";

export function updateUserOnEdit(
  user: User
): UserActionTypes {
  return {
    type: UPDATE_USER_ON_EDIT,
    user: user
  };
}

