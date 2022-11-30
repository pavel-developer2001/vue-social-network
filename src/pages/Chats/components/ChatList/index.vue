<script lang="ts" setup>
import ChatListItem from "../ChatListItem/index.vue";
const chatsArr = [
  {
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "It group",
    description: "Вступай в наше сообщество",
  },
  {
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "It group",
    description: "Вступай в наше сообщество",
  },
];
</script>

<template>
  <article>
    <chat-list-item v-for="chat in chatsArr" :key="chat.name" :chat="chat" />
  </article>
</template>
