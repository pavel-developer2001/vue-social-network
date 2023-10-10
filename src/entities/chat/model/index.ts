import type { State } from "@/app/store"
import type { IChat } from "@/shared/api/social-network/models"
import type { Module } from "vuex"
import actions from "./chat.actions"

export interface ChatState {
  chats: IChat[]
  chat: IChat
  error: null | string
  isLoading: boolean
}

export const chat: Module<ChatState, State> = {
  state: {
    chats: [],
    error: null,
    isLoading: true,
    chat: {} as IChat,
  },
  actions,
  namespaced: true,
}
