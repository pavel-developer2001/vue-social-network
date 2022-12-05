<script setup lang="ts">
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue";
import styles from "./User.module.scss";
import PostList from "@/shared/ui/PostList/index.vue";
import { computed, onMounted, ref } from "vue";
import EditProfile from "./components/EditProfile/index.vue";
import { ElButton } from "element-plus";
import { useStore } from "@/app/store";
import { userIdFromToken } from "@/shared/lib/utils/getDataFromToken";
import { authUser } from "@/entities/auth/auth.selector";

const followers = [
  { count: 22, title: "Подписчиков" },
  { count: 2, title: "Подписок" },
];
const isFollowing = ref(true);
const isMe = ref(true);
const onFollowed = () => (isFollowing.value = !isFollowing);
const onUnFollowed = () => (isFollowing.value = !isFollowing);
const itemsArray = [
  {
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "Vlad Ten",
    time: "9 часов",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ut",
    image:
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  },
  {
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "Vlad Ten",
    time: "9 часов",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ut",
    image:
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  },
];
const { state, dispatch } = useStore();
onMounted(() => {
  dispatch("auth/getUserById", userIdFromToken);
});
const userData = computed(() => authUser(state));
</script>

<template>
  <main-layout
    ><section :class="styles.wrapper">
      <div :class="styles.header">
        <el-page-header @back="$router.push('/')">
          <template #content>
            <span class="text-large font-600 mr-3"> Vlad Ten</span>
          </template>
        </el-page-header>
      </div>
      <div :class="styles.top">
        <el-avatar
          :size="133"
          src="https://pbs.twimg.com/media/FH8reO8XMAI_iMd?format=jpg&name=900x900"
        />
        <edit-profile :isMe="isMe" />
        <div v-if="!isFollowing && !isMe">
          <el-button type="primary" @click="onFollowed" round
            >Подписаться</el-button
          >
        </div>
        <div v-if="isFollowing && !isMe">
          <el-button type="danger" @click="onUnFollowed" round
            >Отписаться</el-button
          >
        </div>
      </div>
      <div :class="styles.content">
        <strong>Vlad Ten</strong>
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
        <post-list :itemsArray="itemsArray" />
      </div></section
  ></main-layout>
</template>
