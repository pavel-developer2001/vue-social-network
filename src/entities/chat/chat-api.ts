import instance from "../../shared/api/social-network/base";

export default class ChatApi {
  static async addChat(data: FormData) {
    return await instance.post("/chat/", data, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    });
  }
  static async getChats() {
    return await instance.get("/chat/");
  }
  static async getChat(id: string) {
    return await instance.get("/chat/" + id);
  }
}
