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
      commit("toggleAuth", true);
    } catch (error) {
      state.error = (error as Error).message;
      state.isLoading = false;
    }
  },
  toggleAuth({ state, commit }: AuthActionsType, isAuth: boolean) {
    state.isAuth = isAuth;
  },
  async refrech({ state, commit }: AuthActionsType) {
    const data = await AuthApi.refresh();
    localStorage.setItem("social-network", data.data.accessToken);
    state.isLoading = false;
    commit("toggleAuth", true);
  },
  async logout({ state, commit }: AuthActionsType) {
    await AuthApi.logout();
    localStorage.removeItem("social-network");
    state.isLoading = false;
    commit("toggleAuth", false);
  },
  async getUserById({ state, commit }: AuthActionsType, id: string) {
    const data = await AuthApi.getUser(id);
    state.user = data.data;
    state.isLoading = false;
  },
};
