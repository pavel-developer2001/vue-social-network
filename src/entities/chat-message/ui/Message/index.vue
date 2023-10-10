<script lang="ts" setup>
import styles from "./Message.module.scss"
const props = defineProps<{ item: any }>()
</script>

<template>
  <div :class="styles.wrapper">
    <router-link to="/user/1">
      <el-avatar :src="props.item.avatar" />
    </router-link>
    <div :class="styles.right">
      <router-link to="/user/1">
        <strong>{{ props.item.name }}</strong>
      </router-link>
      <p>{{ props.item.text }}</p>
      <div :class="styles.bottom">
        <span>{{ props.item.time }}</span>
        <span :class="styles.btn">Ответить</span>
      </div>
    </div>
  </div>
</template>
