import { createStore, useStore as baseUseStore, Store } from "vuex";
import type { InjectionKey } from "vue";
import { auth, type AuthState } from "@/entities/auth";
import { post, type PostState } from "@/entities/post";
import { chat, type ChatState } from "@/entities/chat";

export interface State {
  auth: AuthState;
  post: PostState;
  chat:ChatState
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  modules: { auth, post,chat },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
