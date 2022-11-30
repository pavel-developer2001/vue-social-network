<script lang="ts" setup>
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue";
import styles from "./Chat.module.scss";
import Message from "./components/Message/index.vue";
import CreateMessage from "./components/CreateMessage/index.vue";

const messages = [
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
  {
    name: "Vlad Ten",
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    text: "Message text",
    time: "12:48",
  },
];
</script>

<template>
  <main-layout>
    <article :class="styles.wrapper">
      <div :class="styles.header">
        <el-page-header @back="$router.push('/')">
          <template #content>
            <span class="text-large font-600 mr-3"> Чат </span>
          </template>
        </el-page-header>
      </div>
      <div :class="styles.messages">
        <message v-for="item in messages" :key="item.name" :item="item" />
      </div>
      <div :class="styles.bottom">
        <create-message />
      </div>
    </article>
  </main-layout>
</template>
