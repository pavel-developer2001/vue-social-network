<script setup lang="ts">
import styles from "./CreatePost.module.scss";
import { Picture } from "@element-plus/icons-vue";
import { ref, watch } from "vue";
import { genFileId } from "element-plus";
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus";

const upload = ref<UploadInstance>();
const image = ref<null | File>(null);
const text = ref("");

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles();
  const file = files[0] as UploadRawFile;
  file.uid = genFileId();
  upload.value!.handleStart(file);
};
watch(image, (newIm, oldIm) => {
  console.log(newIm);
});
const changeFile = (file: any) => {
  image.value = file;
};
const onAddPost = () => {
  console.log("data", text.value, image.value);
};
</script>

<template>
  <div :class="styles.wrapper">
    <el-input
      maxlength="1500"
      placeholder="Что происходит?"
      show-word-limit
      type="textarea"
      v-model="text"
      :class="styles.input"
    />

    <div :class="styles.bottom">
      <el-upload
        ref="upload"
        class="upload-demo"
        :limit="1"
        :on-exceed="handleExceed"
        :on-change="changeFile"
        :auto-upload="false"
      >
        <template #trigger>
          <el-button type="primary" :icon="Picture" circle />
        </template>
      </el-upload>
      <el-button type="primary" @click="onAddPost">Опубликовать</el-button>
    </div>
  </div>
</template>
