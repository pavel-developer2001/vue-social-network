<script setup lang="ts">
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue";
import styles from "./Post.module.scss";
import { Star, MoreFilled, Delete, Edit } from "@element-plus/icons-vue";
import { ref, unref } from "vue";
import { ClickOutside as vClickOutside } from "element-plus";
const buttonRef = ref();
const popoverRef = ref();
const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.();
};
const onDeletePost = () => console.log("delete");
const settings = [
  { title: "Редактировать", func: onDeletePost, icon: Edit },
  { title: "Удалить", func: onDeletePost, icon: Delete },
];
const dataArr = [
  { count: 1172, title: "Звёзд" },
  { count: 172, title: "Комментариев" },
];
</script>

<template>
  <main-layout>
    <div :class="styles.wrapper">
      <div :class="styles.header">
        <el-page-header @back="$router.push('/')">
          <template #content>
            <span class="text-large font-600 mr-3"> Пост </span>
          </template>
        </el-page-header>
      </div>
      <div :class="styles.top">
        <router-link to="/user/1">
          <div :class="styles.left">
            <el-avatar
              src="https://pbs.twimg.com/media/FiwNTBZXkAAWYTv?format=jpg&name=medium"
            />
            <strong>Vlad ten</strong>
          </div></router-link
        >
        <div :class="styles.right">
          <el-button
            ref="buttonRef"
            v-click-outside="onClickOutside"
            :icon="MoreFilled"
            circle
          />

          <el-popover
            ref="popoverRef"
            :virtual-ref="buttonRef"
            trigger="click"
            virtual-triggering
          >
            <div v-for="setting in settings" :key="setting.title">
              <div :class="styles.func" @click="setting.func">
                <Component
                  :class="styles.setIcon"
                  :is="setting.icon"
                ></Component>
                <span>{{ setting.title }}</span>
              </div>
            </div>
          </el-popover>
        </div>
      </div>
      <div :class="styles.main">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
          sequi nemo autem quisquam explicabo accusantium doloribus? Consectetur
          asperiores, aut tempora fuga eaque, quam placeat neque sit magnam
          molestias error excepturi!
        </p>
        <el-image
          :class="styles.image"
          src="https://pbs.twimg.com/media/FiwNTBZXkAAWYTv?format=jpg&name=medium"
          fit="cover"
        />
        <span>10:00 PM · 29 нояб. 2022 г.</span>
      </div>
      <div :class="styles.bottom">
        <div :class="styles.item" v-for="item in dataArr" :key="item.title">
          <strong>{{ item.count }}</strong>
          <span>{{ item.title }}</span>
        </div>
      </div>
      <div :class="styles.settings">
        <div :class="styles.option">
          <el-button type="primary" :icon="Star" circle />
        </div>
        <div :class="styles.option">
          <el-button type="primary" :icon="Star" circle />
        </div>
      </div>
    </div>
  </main-layout>
</template>
