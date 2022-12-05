import type { AuthState } from ".";

export default {
  toggleAuth(state: AuthState, isAuth: boolean) {
    console.log("test", isAuth);
    state.isAuth = isAuth;
  },
};
