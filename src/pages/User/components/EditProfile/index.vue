<script setup lang="ts">
import { Close } from "@element-plus/icons-vue"
import { ref } from "vue"
import styles from "./EditProfile.module.scss"

const props = defineProps<{ isMe: boolean }>()

const visible = ref(false)
</script>

<template>
  <div v-if="props.isMe">
    <el-button round @click="visible = true">Изменить профиль</el-button>
  </div>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div :class="styles.header">
        <h4 :id="titleId" :class="titleClass">Изменить профиль</h4>
        <el-button @click="close" circle :icon="Close" />
      </div>
    </template>
    This is dialog content.
  </el-dialog>
</template>
