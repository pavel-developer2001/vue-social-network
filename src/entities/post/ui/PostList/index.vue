<script lang="ts" setup>
import type { IPost } from "@/shared/api/social-network/models"
import PostListItem from "../PostListItem/index.vue"

interface PostListProps {
  itemsArray: IPost[]
}

const props = defineProps<PostListProps>()
</script>

<template>
  <section v-for="item in props.itemsArray" :key="item._id">
    <post-list-item :item="item" />
  </section>
</template>
