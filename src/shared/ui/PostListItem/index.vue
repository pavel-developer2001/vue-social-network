<script lang="ts" setup>
import styles from "./PostListItem.module.scss";
import { ChatSquare } from "@element-plus/icons-vue";
import type { IPost } from "@/shared/api/social-network/models";
import dayjs from "dayjs";
interface PostListItemProps {
  item: IPost;
}
const { item } = defineProps<PostListItemProps>();
</script>

<template>
  <div :class="styles.wrapper">
    <router-link :to="'/post/' + item._id"
      ><div>
        <router-link :to="'/user/' + item.user._id">
          <el-avatar :src="item.user.avatar ? item.user.avatar : null"
        /></router-link>
      </div>
      <div :class="styles.right">
        <router-link :to="'/user/' + item.user._id">
          <div :class="styles.top">
            <strong>{{ item.user.name }}</strong>
            <span>{{
              dayjs(item.createdAt).format("dddd, DD/MM/YYYY, H:m")
            }}</span>
          </div></router-link
        >
        <div :class="styles.main">
          <p :class="styles.text">
            {{ item.text }}
          </p>
          <el-image :class="styles.image" :src="item.image" fit="cover" />
        </div>
        <div :class="styles.bottom">
          <div :class="styles.setting">
            <ChatSquare :class="styles.icon" />
            <span>{{ item.stars }}</span>
          </div>
          <div :class="styles.setting">
            <ChatSquare :class="styles.icon" />
            <span>5</span>
          </div>
        </div>
      </div></router-link
    >
  </div>
</template>
