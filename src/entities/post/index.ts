import type { State } from "@/app/store";
import type { IPost } from "@/shared/api/social-network/models";
import type { Module } from "vuex";
import actions from "./post.actions";

export interface PostState {
  posts: IPost[];
  post: IPost;
  error: null | string;
  isLoading: boolean;
}

export const post: Module<PostState, State> = {
  state: {
    posts: [],
    error: null,
    isLoading: true,
    post: {} as IPost,
  },
  actions,
  namespaced: true,
};
