<script lang="ts" setup>
import styles from "./ChatListItem.module.scss"
import type { IChat } from "@/shared/api/social-network/models"
const props = defineProps<{ chat: IChat }>()
</script>

<template>
  <router-link :to="'/chat/' + props.chat._id">
    <section :class="styles.wrapper">
      <el-avatar :src="chat.image ? props.chat.image : ''" />
      <div :class="styles.right">
        <strong>{{ props.chat.title }}</strong>
        <span>{{ props.chat.description }}</span>
      </div>
    </section></router-link
  >
</template>
