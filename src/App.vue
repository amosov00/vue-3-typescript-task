<script setup lang="ts">
import MainPage from './views/MainPage.vue'
import Modal from './components/Modal.vue'
import { useWindowSize } from '@vueuse/core'
import { ref, provide, onMounted} from 'vue'
import { useSubscriptionStore } from '@/stores/subscriptions'

const { width, height } = useWindowSize()
const { fetchSubscribes } = useSubscriptionStore()

const wSize = {
  width: width,
  height: height
}

onMounted(async () => {
  await fetchSubscribes()
})

provide('wSize', wSize)
</script>

<template>
  <Modal />
  <main ref="app">
    <MainPage />
  </main>
</template>

<style lang="scss">
@import "./assets/styles/common.scss";
</style>
