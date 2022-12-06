<script lang="ts" setup>
import ChatListItem from "../ChatListItem/index.vue";
import { useStore } from "@/app/store";
import { computed, onMounted } from "vue";
import {
  chatArray,
  chatError,
  chatIsLoading,
} from "@/entities/chat/chat.selector";

const { state, dispatch } = useStore();
const chats = computed(() => chatArray(state));
const isLoading = computed(() => chatIsLoading(state));
const error = computed(() => chatError(state));

onMounted(() => {
  dispatch("chat/getChats");
});
</script>

<template>
  <article>
    <div v-if="isLoading">LOading...</div>
    <div v-if="error">{{ error }}</div>
    <chat-list-item
      v-if="!isLoading"
      v-for="chat in chats"
      :key="chat._id"
      :chat="chat"
    />
  </article>
</template>
