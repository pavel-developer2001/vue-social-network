<script setup lang="ts">
import styles from "./CreatePost.module.scss"
import { Picture } from "@element-plus/icons-vue"
import { computed, ref } from "vue"
import { ElMessage, genFileId } from "element-plus"
import type { UploadInstance, UploadProps, UploadRawFile } from "element-plus"
import { useStore } from "@/app/store"
import { postError } from "@/entities/post/model/post.selector"

const upload = ref<UploadInstance>()
const image = ref<string | Blob>("")
const text = ref("")

const handleExceed: UploadProps["onExceed"] = (files) => {
  upload.value!.clearFiles()
  const file = files[0] as UploadRawFile
  file.uid = genFileId()
  upload.value!.handleStart(file)
}
const changeFile = (file: any) => {
  image.value = file.raw
}
const { dispatch, state } = useStore()
const error = computed(() => postError(state))
const onAddPost = () => {
  const formData = new FormData()
  formData.append("image", image.value)
  formData.append("text", text.value)
  dispatch("post/addPost", formData)
  if (!error.value) {
    ElMessage({
      message: "Пост создан",
      type: "success",
    })
  }
  text.value = ""
  image.value = ""
  upload.value!.clearFiles()
}
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
    <el-alert v-if="error" :title="error" type="error" effect="dark" />
  </div>
</template>
