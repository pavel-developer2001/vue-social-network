<template lang="">
  <Form as="el-form" :validation-schema="schema" @submit="onSubmit">
    <Field name="name" v-slot="{ value, field, errorMessage }">
      <el-form-item :error="errorMessage" label="Name" required>
        <el-input
          placeholder="Name"
          v-bind="field"
          :validate-event="false"
          :model-value="value"
        />
      </el-form-item>
    </Field>
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
    <Field name="password2" v-slot="{ value, field, errorMessage }">
      <el-form-item :error="errorMessage" label="Password2" required>
        <el-input
          type="password"
          placeholder="Password"
          v-bind="field"
          :validate-event="false"
          :model-value="value"
        />
      </el-form-item>
    </Field>
    <div >
      <el-button type="primary" native-type="submit"
        >Зарегистрироваться</el-button
      >
    </div>
  </Form>
</template>
<script lang="ts" setup>
import { Field, Form } from "vee-validate";
import { object, string } from "yup";
import { markRaw } from "vue";

const schema = markRaw(
  object({
    name: string().required("enter name").label("name"),
    email: string().required("enter email").email().label("Email address"),
    password: string().required("enter password"),
    password2: string().required("enter password2"),
  })
);

function onSubmit(values: any, actions: any) {
  if (values.password === values.password2) {
    console.log(values);
    actions.resetForm();
  }
}
</script>
