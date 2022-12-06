import PostApi from "@/shared/api/social-network/apis/post-api";
import type { Commit } from "vuex";
import type { PostState } from ".";

type PostActionsType = { state: PostState; commit: Commit };

export default {
  async addPost({ state }: PostActionsType, formData: FormData) {
    try {
      state.isLoading = true;
      const data = await PostApi.addPost(formData);
      state.posts.unshift(data.data);
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async getPosts({ state }: PostActionsType) {
    try {
      const data = await PostApi.getPosts();
      state.posts = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async getPost({ state }: PostActionsType, id: number) {
    try {
      const data = await PostApi.getPost(id);
      state.post = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async getPostsByUser({ state }: PostActionsType) {
    try {
      const data = await PostApi.getPostByUser();
      state.posts = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async updatePost(
    { state }: PostActionsType,
    payload: { id: number; text: string }
  ) {
    try {
      state.isLoading = true;
      const data = await PostApi.updatePost(payload);
      state.isLoading = false;
      state.post = data.data;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async deletePost({ state }: PostActionsType, id: number) {
    try {
      await PostApi.deletePost(id);
      state.posts = state.posts.filter((item) => item._id === id);
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
};
