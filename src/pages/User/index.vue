<script setup lang="ts">
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue"
import styles from "./User.module.scss"
import PostList from "@/entities/post/ui/PostList/index.vue"
import { computed, onMounted, ref } from "vue"
import EditProfile from "./components/EditProfile/index.vue"
import { ElButton } from "element-plus"
import { useStore } from "@/app/store"
import { userIdFromToken } from "@/shared/lib/utils/getDataFromToken"
import { authIsLoading, authUser } from "@/entities/auth/model/auth.selector"
import { useRoute } from "vue-router"
import { postError, postsArray } from "@/entities/post/model/post.selector"

const followers = [
  { count: 22, title: "Подписчиков" },
  { count: 2, title: "Подписок" },
]
const isFollowing = ref(false)

const onFollowed = () => (isFollowing.value = !isFollowing.value)
const onUnFollowed = () => (isFollowing.value = !isFollowing.value)
const { state, dispatch } = useStore()
const route = useRoute()
onMounted(() => {
  dispatch("auth/getUserById", route.params.id)
  dispatch("post/getPostByUser")
})

const userData = computed(() => authUser(state))
const isLoading = computed(() => authIsLoading(state))
const posts = computed(() => postsArray(state))
const error = computed(() => postError(state))
</script>

<template>
  <main-layout
    ><section :class="styles.wrapper" v-if="!isLoading">
      <div :class="styles.header">
        <el-page-header @back="$router.push('/')">
          <template #content>
            <span class="text-large font-600 mr-3"> {{ userData.name }}</span>
          </template>
        </el-page-header>
      </div>
      <div :class="styles.top">
        <el-avatar
          :size="133"
          :src="userData.avatar ? userData.avatar : null"
        />
        <edit-profile :isMe="userData._id === userIdFromToken ? true : false" />
        <div
          v-if="!isFollowing && userData._id !== userIdFromToken ? true : false"
        >
          <el-button type="primary" @click="onFollowed" round
            >Подписаться</el-button
          >
        </div>
        <div
          v-if="isFollowing && userData._id !== userIdFromToken ? true : false"
        >
          <el-button type="danger" @click="onUnFollowed" round
            >Отписаться</el-button
          >
        </div>
      </div>
      <div :class="styles.content">
        <strong>{{ userData.name }}</strong>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          aliquid numquam eaque nemo, consectetur quibusdam eligendi, fuga,
          nostrum vero soluta est debitis? Quasi tenetur explicabo, fugiat natus
          similique voluptatem eligendi.
        </p>
        <div :class="styles.followers">
          <div
            :class="styles.follower"
            v-for="follower in followers"
            :key="follower.title"
          >
            <strong>{{ follower.count }}</strong>
            <span>{{ follower.title }}</span>
          </div>
        </div>
      </div>
      <div :class="styles.main">
        <div v-if="isLoading">Loading...</div>
        <div v-if="error">{{ error }}</div>
        <post-list v-if="!isLoading" :itemsArray="posts" />
      </div>
    </section>
    <section v-if="isLoading">LOading...</section></main-layout
  >
</template>
