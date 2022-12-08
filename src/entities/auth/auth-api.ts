import instance from "../../shared/api/social-network/base";

export default class AuthApi {
  static async registration(payload: {
    name: string;
    email: string;
    password: string;
  }) {
    return instance.post("/auth/register", payload);
  }
  static async login(payload: { email: string; password: string }) {
    return instance.post("/auth/login", payload);
  }
  static async getUser(id: string | string[] | undefined) {
    return instance.get("/user/" + id);
  }
  static async logout() {
    return instance.post("/auth/logout");
  }
  static async refresh() {
    return instance.get("/auth/refresh", {
      withCredentials: true,
    });
  }
}
