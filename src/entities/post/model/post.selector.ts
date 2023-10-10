import type { State } from "@/app/store"

export const postError = (state: State) => state.post.error
export const postIsLoading = (state: State) => state.post.isLoading
export const postsArray = (state: State) => state.post.posts
export const postData = (state: State) => state.post.post
