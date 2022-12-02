<template lang="">
  <Form as="el-form" :validation-schema="schema" @submit="onSubmit">
    <Field name="email" v-slot="{ value, field, errorMessage }">
      <el-form-item :error="errorMessage" label="Email" required>
        <el-input
          placeholder="Email Address"
          v-bind="field"
          :validate-event="false"
          :model-value="value"
        />
      </el-form-item>
    </Field>
    <Field name="password" v-slot="{ value, field, errorMessage }">
      <el-form-item :error="errorMessage" label="Password" required>
        <el-input
          type="password"
          placeholder="Password"
          v-bind="field"
          :validate-event="false"
          :model-value="value"
        />
      </el-form-item>
    </Field>

    <div>
      <el-button type="primary" native-type="submit">Войти</el-button>
    </div>
  </Form>
</template>
<script lang="ts" setup>
import { Field, Form } from "vee-validate";
import { object, string } from "yup";
import { markRaw } from "vue";

const schema = markRaw(
  object({
    email: string().required("enter email").email().label("Email address"),
    password: string().required("enter password"),
  })
);

function onSubmit(values: any, actions: any) {
  console.log(values);
  actions.resetForm();
}
</script>
