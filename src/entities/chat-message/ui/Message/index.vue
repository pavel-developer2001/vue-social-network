<script lang="ts" setup>
import styles from "./Message.module.scss"
const { item } = defineProps<{ item: any }>()
</script>

<template>
  <div :class="styles.wrapper">
    <router-link to="/user/1">
      <el-avatar :src="item.avatar" />
    </router-link>
    <div :class="styles.right">
      <router-link to="/user/1">
        <strong>{{ item.name }}</strong>
      </router-link>
      <p>{{ item.text }}</p>
      <div :class="styles.bottom">
        <span>{{ item.time }}</span>
        <span :class="styles.btn">Ответить</span>
      </div>
    </div>
  </div>
</template>
