export const UPDATE_POST_LIST = "UPDATE_POST_LIST";
export const UPDATE_FILTERED_POST_LIST = "UPDATE_FILTERED_POST_LIST";

export interface ListBodyState {
  postList?: PostList;
  filteredPostList?: PostList;
}

interface updatePostList {
  type: typeof UPDATE_POST_LIST;
  payload: PostList;
}
interface updateFilteredPostList {
  type: typeof UPDATE_FILTERED_POST_LIST;
  payload: PostList;
}

export type PostList = Array<{
  userId: number;
  id: number;
  title: string;
  body: string;
}>;
export type PostListDetails = Array<{
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}>;
export type ListActionTypes = updatePostList | updateFilteredPostList;
