import type { AuthState } from ".";

export default {
  toggleAuth(state: AuthState, isAuth: boolean) {
    state.isAuth = isAuth;
  },
};
