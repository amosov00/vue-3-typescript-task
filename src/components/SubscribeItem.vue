<script setup lang="ts">
import { type SubscriptionStore } from '@/data/types'
import Checkbox from '@/components/Checkbox.vue'

const props = defineProps<{
  item: SubscriptionStore
}>()

const getImageUrl = (name: string) => {
  return new URL(`../../src/assets/img/` + name, import.meta.url).href
}
</script>

<template>
  <div class="subscribe__item" :class="{ active: item.subscribed }">
    <Checkbox v-model="item.subscribed" />
    <img v-lazy="{ src: getImageUrl(item.img) }" :alt="item.site" />
    <p v-html="item.text" />
  </div>
</template>

<style lang="scss" scoped>
.subscribe {
  &__item {
    height: 100%;
    border: 1px solid var(--border-item);
    background: var(--background);
    transition: 0.5s;
    padding: 2.8rem;
    position: relative;
    &:hover {
      box-shadow: 0 0 9px rgba(88, 180, 134, 0.2);
    }
    &.active {
      background: #f6f6f6;
      border-color: white;
    }
    .checkbox {
      position: absolute;
      top: 2.8rem;
      right: 2.2rem;
      @media (max-width: 740px) {
        top: 1rem;
        right: 1rem;
      }
    }
    img {
      height: 5.2rem;
      max-width: 18.3rem;
      object-fit: contain;
      @media (max-width: 400px) {
        max-width: 15.3rem;
      }
    }
    p {
      margin-bottom: 0;
      margin-top: 2.5rem;
    }
    @media (max-width: 740px) {
      padding: 2rem;
    }
  }
}
</style>
