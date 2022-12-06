import type { State } from "@/app/store";

export const chatArray = (state: State) => state.chat.chats;
export const chatIsLoading = (state: State) => state.chat.isLoading;
export const chatData = (state: State) => state.chat.chat;
export const chatError = (state: State) => state.chat.error;
