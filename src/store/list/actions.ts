import { UPDATE_POST_LIST, UPDATE_FILTERED_POST_LIST, ListActionTypes, PostList } from "./types";

export function updatePostList(
  postList: PostList
): ListActionTypes {
  return {
    type: UPDATE_POST_LIST,
    payload: postList
  };
}

export function updateFilteredPostList(
  postList: PostList
): ListActionTypes {
  return {
    type: UPDATE_FILTERED_POST_LIST,
    payload: postList
  };
}