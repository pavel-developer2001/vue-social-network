import { createStore, useStore as baseUseStore, Store } from "vuex";
import type { InjectionKey } from "vue";
import { auth, type AuthState } from "@/entities/auth";

export interface State {
  auth: AuthState;
}

export const key: InjectionKey<Store<State>> = Symbol();

const store = createStore<State>({
  modules: { auth },
});

export function useStore() {
  return baseUseStore(key);
}

export default store;
