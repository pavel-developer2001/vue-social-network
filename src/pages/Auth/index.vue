<script lang="ts" setup>
import { useStore } from "@/app/store";
import { authChecked } from "@/entities/auth/auth.selector";
import { computed, onMounted, ref, watch } from "vue";
import { useRouter } from "vue-router";
import styles from "./Auth.module.scss";
import Login from "./components/Login/index.vue";
import Register from "./components/Register/index.vue";

const { state } = useStore();

const isAuth = computed(() => authChecked(state));
const isLogin = ref(true);
const router = useRouter();

onMounted(() => {
  if (isAuth.value === true) router.push("/");
});
watch(isAuth, (newAuth, oldAuth) => {
  if (isAuth.value === newAuth) router.push("/");
});
</script>

<template>
  <section :class="styles.wrapper">
    <h2 :class="styles.title">
      <span v-if="!isLogin">Создать новый аккаунт</span>
      <span v-if="isLogin">Войти в аккаунт</span>
    </h2>
    <div v-if="isLogin">
      <login></login>
    </div>
    <div v-if="!isLogin">
      <register></register>
    </div>
    <div :class="styles.data">
      <el-button type="primary" @click="isLogin = !isLogin" link>
        <span v-if="isLogin">Создать новый аккаунт</span>
        <span v-if="!isLogin">Войти в аккаунт</span>
      </el-button>
    </div>
  </section>
</template>
