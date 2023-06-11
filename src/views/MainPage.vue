<script setup lang="ts">
import Aside from '@/components/Aside.vue'
import MainContent from '@/components/MainContent.vue'
import AsideFooter from '@/components/AsideFooter.vue'
import MobileHeader from '@/components/MobileHeader.vue'
import { inject, onUnmounted, ref } from 'vue'
import { useSubscriptionStore } from '@/stores/subscriptions'
import { onMounted } from 'vue'
import { type WindowSize } from '@/data/types'

const subscriptionStore = useSubscriptionStore()
// test
const wWidth = inject('wSize') as WindowSize
const showHeader = ref(false)

function userScroll() {
  showHeader.value = window.scrollY > 240
}

onMounted(() => {
  if (wWidth.width < 740) {
    window.addEventListener('scroll', userScroll)
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', userScroll)
})
</script>

<template>
  <div class="page__wrapper">
    <div class="content page__content">
      <aside class="page__aside">
        <Aside />
      </aside>
      <main class="page__main">
        <MainContent />
      </main>
      <AsideFooter v-if="wWidth.width < 740" />
      <Transition>
        <MobileHeader v-if="showHeader && wWidth.width < 740" />
      </Transition>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page {
  &__content {
    display: grid;
    grid-template-columns: 18.2rem 1fr;
    grid-template-rows: 1fr;
    grid-gap: 5.2rem;
    padding: 7.5rem 3.6rem 3.5rem;
    min-height: calc(100vh - 16rem);
    @media (max-width: 740px) {
      grid-template-columns: 1fr;
      padding: 3.5rem 1.5rem;
    }
  }
  &__aside {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 740px) {
      align-items: center;
    }
  }
}
</style>

