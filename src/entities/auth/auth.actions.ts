import AuthApi from "@/shared/api/social-network/apis/auth-api";
import type { Commit } from "vuex";
import type { AuthState } from ".";

type AuthActionsType = { state: AuthState; commit: Commit };

export default {
  async register(
    { state, commit }: AuthActionsType,
    auth: { name: string; email: string; password: string }
  ) {
    try {
      const data = await AuthApi.registration(auth);
      console.log("data", data.data);
      localStorage.setItem("social-network", data.data.accessToken);
      state.isLoading = false;
      commit("toggleAuth", true);
      // state.isAuth = true;
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  async login(
    { state, commit }: AuthActionsType,
    auth: { email: string; password: string }
  ) {
    try {
      const data = await AuthApi.login(auth);
      localStorage.setItem("social-network", data.data.accessToken);
      state.isLoading = false;
      state.isAuth = true;
      console.log("data", state.isAuth);
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
};
