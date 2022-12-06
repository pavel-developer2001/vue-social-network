import PostApi from "@/shared/api/social-network/apis/post-api";
import type { Commit } from "vuex";
import type { PostState } from ".";

type PostActionsType = { state: PostState; commit: Commit };

export default {
  async addPost({ state, commit }: PostActionsType, formData: FormData) {
    try {
      state.isLoading = true;
      const data = await PostApi.addPost(formData);
      state.posts.push(data.data);
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
};
