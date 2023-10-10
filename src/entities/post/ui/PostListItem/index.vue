<script lang="ts" setup>
import styles from "./PostListItem.module.scss"
import { ChatSquare } from "@element-plus/icons-vue"
import type { IPost } from "@/shared/api/social-network/models"
import dayjs from "dayjs"
interface PostListItemProps {
  item: IPost
}
const props = defineProps<PostListItemProps>()
</script>

<template>
  <div :class="styles.wrapper">
    <router-link :to="'/post/' + props.item._id"
      ><div>
        <router-link :to="'/user/' + props.item.user._id">
          <el-avatar :src="item.user.avatar ? props.item.user.avatar : ''"
        /></router-link>
      </div>
      <div :class="styles.right">
        <router-link :to="'/user/' + props.item.user._id">
          <div :class="styles.top">
            <strong>{{ props.item.user.name }}</strong>
            <span>{{
              dayjs(item.createdAt).format("dddd, DD/MM/YYYY, H:m")
            }}</span>
          </div></router-link
        >
        <div :class="styles.main">
          <p :class="styles.text">
            {{ props.item.text }}
          </p>
          <el-image :class="styles.image" :src="props.item.image" fit="cover" />
        </div>
        <div :class="styles.bottom">
          <div :class="styles.setting">
            <ChatSquare :class="styles.icon" />
            <span>{{ props.item.stars }}</span>
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
