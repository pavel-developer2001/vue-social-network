<script lang="ts" setup>
import ChatListItem from "../ChatListItem/index.vue"
import { useStore } from "@/app/store"
import { computed, onMounted } from "vue"
import {
  chatArray,
  chatError,
  chatIsLoading,
} from "@/entities/chat/model/chat.selector"

const { state, dispatch } = useStore()
const chats = computed(() => chatArray(state))
const isLoading = computed(() => chatIsLoading(state))
const error = computed(() => chatError(state))

onMounted(() => {
  dispatch("chat/getChats")
})
</script>

<template>
  <article>
    <div v-if="isLoading">LOading...</div>
    <div v-if="error">{{ error }}</div>
    <template v-if="!isLoading">
      <chat-list-item v-for="chat in chats" :key="chat._id" :chat="chat" />
    </template>
  </article>
</template>
