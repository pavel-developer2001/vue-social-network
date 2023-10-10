<script setup lang="ts">
import styles from "./PostData.module.scss"
import {
  Star,
  MoreFilled,
  Delete,
  Edit,
  Check,
  CloseBold,
} from "@element-plus/icons-vue"
import { onMounted, ref, unref, watch } from "vue"
import {
  ClickOutside as vClickOutside,
  ElAvatar,
  ElButton,
  ElImage,
  ElMessage,
  ElMessageBox,
  ElPageHeader,
  ElPopover,
} from "element-plus"
import { useStore } from "@/app/store"
import { RouterLink, useRoute, useRouter } from "vue-router"
import dayjs from "dayjs"
import {
  postData,
  postError,
  postIsLoading,
} from "@/entities/post/model/post.selector"
import { computed } from "vue"
const { state, dispatch } = useStore()

const route = useRoute()
const router = useRouter()
const isLoading = computed(() => postIsLoading(state))
const post = computed(() => postData(state))
const error = computed(() => postError(state))
const buttonRef = ref()
const popoverRef = ref()
const isEdit = ref(false)
const text = ref(post.value.text)
watch(text, (newText) => (text.value = newText))
watch(post, (newPost) => {
  text.value = newPost.text
})
watch(isEdit, (newIsEdit) => {
  isEdit.value = newIsEdit
})

onMounted(() => {
  dispatch("post/getPost", route.params.id)
})

const dataArr = [
  { count: post.value.stars, title: "Звёзд" },
  { count: 172, title: "Комментариев" },
]

const onClickOutside = () => {
  unref(popoverRef).popperRef?.delayHide?.()
}
const onDeletePost = () => {
  ElMessageBox.confirm("Вы уверены что хотите удалить этот пост?")
    .then(() => {
      dispatch("post/deletePost", Number(route.params.id))
      router.push("/")
      ElMessage({
        message: "Пост удалён!",
        type: "success",
      })
    })
    .catch(() => {
      onClickOutside()
    })
}

const onUpdateIsEdit = () => (isEdit.value = true)

const settings = [
  {
    title: "Редактировать",
    func: onUpdateIsEdit,
    icon: Edit,
  },
  {
    title: "Удалить",
    func: onDeletePost,
    icon: Delete,
  },
]
const onUpdatePost = () => {
  const data = { id: Number(route.params.id), text: text.value }
  dispatch("post/updatePost", data)
  isEdit.value = false
  ElMessage({
    message: "Пост обновлён!",
    type: "success",
  })
}
const cancelUpdate = () => (isEdit.value = false)
const privateSettrings = [
  {
    title: "Обновить",
    func: onUpdatePost,
    icon: Check,
  },
  {
    title: "Отмена",
    func: cancelUpdate,
    icon: CloseBold,
  },
]
</script>

<template>
  <div v-if="isLoading" :class="styles.wrapper">LOading...</div>
  <div v-if="error" :class="styles.wrapper">{{ error }}</div>
  <div v-if="!isLoading" :class="styles.wrapper">
    <div :class="styles.header">
      <el-page-header @back="$router.push('/')">
        <template #content>
          <span class="text-large font-600 mr-3"> Пост </span>
        </template>
      </el-page-header>
    </div>
    <div :class="styles.top">
      <router-link :to="'/user/' + post.user?._id">
        <div :class="styles.left">
          <el-avatar :src="post.user?.avatar ? post.user?.avatar : ''" />
          <strong>{{ post.user?.name }}</strong>
        </div></router-link
      >
      <div :class="styles.right">
        <el-button
          ref="buttonRef"
          v-click-outside="onClickOutside"
          :icon="MoreFilled"
          circle
        />

        <el-popover
          ref="popoverRef"
          :virtual-ref="buttonRef"
          trigger="click"
          virtual-triggering
        >
          <template v-if="!isEdit">
            <div v-for="setting in settings" :key="setting.title">
              <div :class="styles.func" @click="setting.func">
                <Component
                  :class="styles.seticon"
                  :is="setting.icon"
                ></Component>
                <span>{{ setting.title }}</span>
              </div>
            </div>
          </template>

          <template v-if="isEdit">
            <div v-for="setting in privateSettrings" :key="setting.title">
              <div :class="styles.func" @click="setting.func">
                <Component
                  :class="styles.seticon"
                  :is="setting.icon"
                ></Component>
                <span>{{ setting.title }}</span>
              </div>
            </div>
          </template>
        </el-popover>
      </div>
    </div>
    <div :class="styles.main">
      <p v-if="!isEdit">
        {{ post.text }}
      </p>
      <el-input v-model="text" v-if="isEdit" />
      <el-image
        :class="styles.image"
        :src="post.image ? post.image : ''"
        fit="cover"
      />
      <span>{{ dayjs(post.createdAt).format("dddd, DD/MM/YYYY, H:m") }}</span>
    </div>
    <div :class="styles.bottom">
      <div :class="styles.item" v-for="item in dataArr" :key="item.title">
        <strong>{{ item.count }}</strong>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div :class="styles.settings">
      <div :class="styles.option">
        <el-button type="primary" :icon="Star" circle />
      </div>
      <div :class="styles.option">
        <el-button type="primary" :icon="Star" circle />
      </div>
    </div>
  </div>
</template>
