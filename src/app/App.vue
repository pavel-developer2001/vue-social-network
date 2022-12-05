<script setup lang="ts">
import { token } from "@/shared/lib/utils/getDataFromToken";
import { RouterView } from "vue-router";
import { useStore } from "./store";
const { dispatch } = useStore();

if (token) {
  dispatch("auth/toggleAuth", true);
  dispatch("auth/refrech");
}
</script>

<template>
  <div class="wrapper"><router-view /></div>
</template>
