<script setup lang="ts">
import styles from "./Home.module.scss"
import CreatePost from "@/entities/post/ui/CreatePost/index.vue"
import PostList from "@/entities/post/ui/PostList/index.vue"
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue"
import { computed, onMounted, watch } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "@/app/store"
import { authChecked } from "@/entities/auth/model/auth.selector"
import {
  postError,
  postIsLoading,
  postsArray,
} from "@/entities/post/model/post.selector"

const router = useRouter()
const { state, dispatch } = useStore()
const isAuth = computed(() => authChecked(state))
const posts = computed(() => postsArray(state))
const isLoading = computed(() => postIsLoading(state))
const error = computed(() => postError(state))
onMounted(() => {
  if (isAuth.value === false) router.push("/auth")
  dispatch("post/getPosts")
})
watch(isAuth, (newAuth, oldAuth) => {
  if (isAuth.value === newAuth) router.push("/auth")
})
</script>

<template>
  <main-layout
    ><h2 :class="styles.title">Главная</h2>
    <create-post />
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <post-list :itemsArray="posts" v-if="!isLoading" />
  </main-layout>
</template>
