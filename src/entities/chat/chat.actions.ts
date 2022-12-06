import ChatApi from "@/shared/api/social-network/apis/chat-api";
import type { Commit } from "vuex";
import type { ChatState } from ".";

type ChatActionsType = { state: ChatState; commit: Commit };

export default {
  async addChat({ state }: ChatActionsType, formData: FormData) {
    try {
      state.isLoading = true;
      const data = await ChatApi.addChat(formData);
      state.chats.unshift(data.data);
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async getChats({ state }: ChatActionsType) {
    try {
      const data = await ChatApi.getChats();
      state.chats = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async getChat({ state }: ChatActionsType, id: string) {
    try {
      const data = await ChatApi.getChat(id);
      state.chat = data.data;
      state.isLoading = false;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
};
