<script lang="ts">
interface PostListItemProps {
  item: any;
}
</script>
<script lang="ts" setup>
import styles from "./PostListItem.module.scss";
import { ChatSquare } from "@element-plus/icons-vue";

const { item } = defineProps<PostListItemProps>();
</script>

<template>
  <div :class="styles.wrapper">
    <router-link to="/post/1"
      ><div>
        <router-link to="/user/1">
          <el-avatar :src="item.avatar"
        /></router-link>
      </div>
      <div :class="styles.right">
        <router-link to="/user/1">
          <div :class="styles.top">
            <strong>{{ item.name }}</strong>
            <span>{{ item.time }}</span>
          </div></router-link
        >
        <div :class="styles.main">
          <p :class="styles.text">
            {{ item.text }}
          </p>
          <el-image :class="styles.image" :src="item.image" fit="cover" />
        </div>
        <div :class="styles.bottom">
          <div :class="styles.setting">
            <ChatSquare :class="styles.icon" />
            <span>5</span>
          </div>
          <div :class="styles.setting">
            <ChatSquare :class="styles.icon" />
            <span>5</span>
          </div>
        </div>
      </div></router-link
    >
  </div>
</template>
