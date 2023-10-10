import type { State } from "@/app/store"

export const authChecked = (state: State) => state.auth.isAuth
export const authIsLoading = (state: State) => state.auth.isLoading
export const authError = (state: State) => state.auth.error
export const authUser = (state: State) => state.auth.user
