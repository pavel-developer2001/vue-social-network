<script lang="ts" setup>
import styles from "./ChatListItem.module.scss"
import type { IChat } from "@/shared/api/social-network/models"
const { chat } = defineProps<{ chat: IChat }>()
</script>

<template>
  <router-link :to="'/chat/' + chat._id">
    <section :class="styles.wrapper">
      <el-avatar :src="chat.image ? chat.image : null" />
      <div :class="styles.right">
        <strong>{{ chat.title }}</strong>
        <span>{{ chat.description }}</span>
      </div>
    </section></router-link
  >
</template>
