<script setup lang="ts">
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue";
import ChatList from "@/entities/chat/ui/ChatList/index.vue";
import CreateChat from "@/entities/chat/ui/CreateChat/index.vue";
import styles from "./Chats.module.scss";
</script>

<template>
  <main-layout>
    <div :class="styles.wrapper">
      <div :class="styles.header">
        <el-page-header @back="$router.push('/')">
          <template #content>
            <span class="text-large font-600 mr-3"> Чаты </span>
          </template>
        </el-page-header>
      </div>
      <create-chat />
      <chat-list />
    </div>
  </main-layout>
</template>
