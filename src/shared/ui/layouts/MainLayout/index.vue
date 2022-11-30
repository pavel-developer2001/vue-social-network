<script lang="ts" setup>
import styles from "./MainLayout.module.scss";
import Navbar from "@/widgets/Navbar/index.vue";
</script>

<template>
  <main :class="styles.wrapper">
    <article :class="styles.container">
      <section :class="styles.header">
        <navbar />
      </section>
      <section :class="styles.main">
        <slot />
      </section>
      <section :class="styles.footer">Footer</section>
    </article>
  </main>
</template>
