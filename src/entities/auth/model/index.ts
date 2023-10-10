import type { State } from "@/app/store"
import type { IUser } from "@/shared/api/social-network/models"
import type { Module } from "vuex"
import actions from "./auth.actions"
import mutations from "./auth.mutations"

export interface AuthState {
  isAuth: boolean
  error: null | string
  user: IUser
  isLoading: boolean
}

export const auth: Module<AuthState, State> = {
  state: {
    isAuth: false,
    error: null,
    isLoading: true,
    user: {} as IUser,
  },
  mutations,
  actions,
  namespaced: true,
}
