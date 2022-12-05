import type { State } from "@/app/store";
import type { Module } from "vuex";
import actions from "./auth.actions";
import mutations from "./auth.mutations";

export interface AuthState {
  isAuth: boolean;
  error: null | string;
  user: any;
  isLoading: boolean;
}

export const auth: Module<AuthState, State> = {
  state: {
    isAuth: false,
    error: null,
    isLoading: true,
    user: {},
  },
  mutations,
  actions,
  namespaced: true,
};
