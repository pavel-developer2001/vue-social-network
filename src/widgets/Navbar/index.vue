<script setup lang="ts">
import styles from "./Navbar.module.scss";
import { User, ChatRound, HomeFilled } from "@element-plus/icons-vue";
const menuArray = [
  { path: "/", icon: HomeFilled, title: "Главная" },
  { path: "/chat", icon: ChatRound, title: "Чат" },
  { path: "/user/1", icon: User, title: "Профиль" },
];
</script>

<template>
  <div :class="styles.wrapper">
    <ul>
      <li :class="styles.menu" v-for="menu in menuArray" :key="menu.path">
        <router-link :to="menu.path">
          <el-icon>
            <component :is="menu.icon"></component>
          </el-icon>
          <span :class="styles.title">{{ menu.title }}</span>
        </router-link>
      </li>
    </ul>
    <div :class="styles.bottom">
      <el-button type="danger" round>Выйти</el-button>
    </div>
  </div>
</template>
