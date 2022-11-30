<script setup lang="ts">
import styles from "./Home.module.scss";
import CreatePost from "@/widgets/CreatePost/index.vue";
import PostList from "@/shared/ui/PostList/index.vue";
import MainLayout from "@/shared/ui/layouts/MainLayout/index.vue";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const isAuth = ref(true);

onMounted(() => {
  if (isAuth.value === false) router.push("/auth");
});
const itemsArray = [
  {
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "Vlad Ten",
    time: "9 часов",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ut",
    image:
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  },
  {
    avatar:
      "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",
    name: "Vlad Ten",
    time: "9 часов",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore ut",
    image:
      "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  },
];
</script>

<template>
  <main-layout
    ><h2 :class="styles.title">Главная</h2>
    <create-post />
    <post-list :itemsArray="itemsArray" />
  </main-layout>
</template>
