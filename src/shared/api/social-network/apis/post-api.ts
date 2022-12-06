import instance from "../base";

export default class PostApi {
  static async addPost(payload: FormData) {
    return await instance.post("/post/", payload, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    });
  }
}
