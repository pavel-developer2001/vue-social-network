import instance from "../../shared/api/social-network/base"

export default class PostApi {
  static async addPost(payload: FormData) {
    return await instance.post("/post/", payload, {
      headers: {
        accept: "application/json",
        "Accept-Language": "en-US,en;q=0.8",
        "Content-Type": "multipart/form-data",
      },
    })
  }
  static async getPosts() {
    return await instance.get("/post/")
  }
  static async getPost(id: number) {
    return await instance.get("/post/" + id)
  }
  static async getPostByUser() {
    return await instance.get("/post/user")
  }
  static async updatePost(data: { id: number; text: string }) {
    return await instance.patch("/post/" + data.id, data)
  }
  static async deletePost(id: number) {
    return await instance.delete("/post/" + id)
  }
}
