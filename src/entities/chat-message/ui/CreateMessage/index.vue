<script lang="ts" setup>
import { ref } from "vue"
import styles from "./CreateMessage.module.scss"
const text = ref("")
const onAddMessage = () => {
  console.log(text.value)
}
</script>

<template>
  <div :class="styles.wrapper">
    <el-input v-model="text" placeholder="Написать сообщение" />
    <el-button @click="onAddMessage" type="primary" v-if="text"
      >Отправить</el-button
    >
  </div>
</template>
