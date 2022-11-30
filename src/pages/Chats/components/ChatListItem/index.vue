<script lang="ts" setup>
import styles from "./ChatListItem.module.scss";
const { chat } = defineProps<{ chat: any }>();
</script>

<template>
  <router-link to="/chat/1">
    <section :class="styles.wrapper">
      <el-avatar :src="chat.avatar" />
      <div :class="styles.right">
        <strong>{{ chat.name }}</strong>
        <span>{{ chat.description }}</span>
      </div>
    </section></router-link
  >
</template>
