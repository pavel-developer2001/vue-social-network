<!-- <script lang="ts">
interface PostListProps {
  itemsArray: any;
}
</script> -->
<script lang="ts" setup>
import PostListItem from "../PostListItem/index.vue";
interface PostListProps {
  itemsArray: any;
}
const { itemsArray } = defineProps<PostListProps>();
</script>

<template>
  <section v-for="item in itemsArray" :key="item.name">
    <post-list-item :item="item" />
  </section>
</template>
