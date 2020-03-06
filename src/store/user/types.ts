export interface UserState {
  userOnEdit?: User
}

export type User = {
  id?: number;
  name?: string;
  address?: string;
  age?: string;
} | null;

export const UPDATE_USER_ON_EDIT = "UPDATE_USER_ON_EDIT";

interface updateUserOnEdit {
  type: typeof UPDATE_USER_ON_EDIT;
  user: User
}
export type UserActionTypes = updateUserOnEdit;
