<script lang="ts" setup>
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue"
import styles from "./Chat.module.scss"
import Message from "@/entities/chat-message/ui/Message/index.vue"
import CreateMessage from "@/entities/chat-message/ui/CreateMessage/index.vue"
import { computed, onMounted, ref } from "vue"
import { useStore } from "@/app/store"
import { useRoute } from "vue-router"
import {
  chatData,
  chatError,
  chatIsLoading,
} from "@/entities/chat/model/chat.selector"

const route = useRoute()
const { state, dispatch } = useStore()
const isSubscribe = ref(false)
const chat = computed(() => chatData(state))
const isLoading = computed(() => chatIsLoading(state))
const error = computed(() => chatError(state))

onMounted(() => {
  dispatch("chat/getChat", route.params.id)
})

const onSubscribe = () => {
  console.log("sub")
  isSubscribe.value = true
}
const onUnSubscribe = () => {
  console.log("unsub")
  isSubscribe.value = false
}

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
]
</script>

<template>
  <main-layout>
    <div v-if="isLoading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <article v-if="!isLoading" :class="styles.wrapper">
      <div :class="styles.header">
        <el-page-header @back="$router.push('/')">
          <template #content>
            <span class="text-large font-600 mr-3"> Чат {{ chat.title }} </span>
          </template>
          <template #extra>
            <div class="flex items-center">
              <el-button
                @click="onSubscribe"
                v-if="!isSubscribe"
                type="primary"
                class="ml-2"
                round
                >Вступить</el-button
              >
              <el-button
                @click="onUnSubscribe"
                v-if="isSubscribe"
                type="danger"
                class="ml-2"
                round
                >Отписаться</el-button
              >
            </div>
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
