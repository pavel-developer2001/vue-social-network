<script lang="ts" setup>
import { Close, Delete, Plus, ZoomIn } from "@element-plus/icons-vue";
import { ref } from "vue";
import styles from "./CreateChat.module.scss";
import type { UploadFile } from "element-plus";
import { Field, Form } from "vee-validate";
import { object, string } from "yup";
import { markRaw } from "vue";

const schema = markRaw(
  object({
    title: string().required("Ввести название"),
    description: string().required("Ввести описание"),
  })
);

function onSubmit(values: any, actions: any) {
  console.log(values, image.value);

  actions.resetForm();
}

const dialogImageUrl = ref("");
const image = ref<File | null>(null);
const dialogVisible = ref(false);
const disabled = ref(false);
const visible = ref(false);

const handleRemove = (file: UploadFile) => {
  image.value = null;
};
const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!;
  dialogVisible.value = true;
};
const onAddImage = (file: File) => {
  image.value = file;
};
</script>

<template>
  <div :class="styles.btn">
    <el-button type="primary" round @click="visible = true"
      >Создать Чат</el-button
    >
  </div>
  <el-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div :class="styles.header">
        <h4 :id="titleId" :class="titleClass">Создать Чат</h4>
        <el-button @click="close" circle :icon="Close" />
      </div>
    </template>
    <div :class="styles.wrapper">
      <div>
        <el-upload
          :limit="1"
          :on-change="onAddImage"
          list-type="picture-card"
          :auto-upload="false"
        >
          <el-icon><Plus /></el-icon>

          <template #file="{ file }">
            <div>
              <img
                class="el-upload-list__item-thumbnail"
                :src="file.url"
                alt=""
              />
              <span class="el-upload-list__item-actions">
                <span
                  class="el-upload-list__item-preview"
                  @click="handlePictureCardPreview(file)"
                >
                  <el-icon><zoom-in /></el-icon>
                </span>
                <span
                  v-if="!disabled"
                  class="el-upload-list__item-delete"
                  @click="handleRemove(file)"
                >
                  <el-icon><Delete /></el-icon>
                </span>
              </span>
            </div>
          </template>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
      </div>
      <Form as="el-form" :validation-schema="schema" @submit="onSubmit">
        <Field name="title" v-slot="{ value, field, errorMessage }">
          <el-form-item :error="errorMessage" required>
            <div :class="styles.input">
              <el-input
                v-bind="field"
                :validate-event="false"
                :model-value="value"
                placeholder="Название чата"
              />
            </div>
          </el-form-item>
        </Field>
        <Field name="description" v-slot="{ value, field, errorMessage }">
          <el-form-item :error="errorMessage" required>
            <div :class="styles.input">
              <el-input
                maxlength="100"
                placeholder="Описание чата"
                show-word-limit
                type="textarea"
                v-bind="field"
                :validate-event="false"
                :model-value="value"
                :class="styles.form"
              />
            </div>
          </el-form-item>
        </Field>
        <div :class="styles.btn">
          <el-button type="primary" native-type="submit" round
            >Создать</el-button
          >
        </div>
      </Form>
    </div>
  </el-dialog>
</template>
