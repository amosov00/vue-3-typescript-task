<script setup lang="ts">
import { useSubscriptionStore } from '@/stores/subscriptions'
import { useModal } from '@/composables/modal'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'

const modal = useModal()
const percentClass = ref('')

const subscriptionStore = useSubscriptionStore()
const { funMeter, setOldFunMeter } = subscriptionStore
let { oldFunMeter } = storeToRefs(subscriptionStore)

function calcPercent ()  {
  if (oldFunMeter.value > funMeter()) {
    percentClass.value = 'minus'
    return oldFunMeter.value - funMeter()
  } else {
    percentClass.value = ''
    return funMeter() - oldFunMeter.value
  }
}

function closeModal () {
  setOldFunMeter(funMeter())
  modal.hideModal()
}
</script>

<template>
  <div class="modal__content-wrapper">
    <h2 class="modal__content-title">Hurrah!</h2>
    <p class="modal__content-subtitle">
      Your subscription preferences have been successfully saved
    </p>
    <div class="modal__content-percent">
      <span class="modal__content-number" :class="percentClass">
        <span v-if="percentClass">-</span>{{ calcPercent() }}%
      </span>
      <p v-if="!percentClass">more fun added</p>
      <p v-else>fun lost :(</p>
    </div>
    <button class="btn btn-primary" @click.prevent="closeModal">
      <span>Ok, great!</span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.modal__content {
  &-wrapper {
    width: 56rem;
    padding: 6rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 740px) {
      width: 100%;
      max-width: 100%;
      padding: 3rem;
    }
    .btn-primary {
      max-width: 27.8rem;
      width: 100%;
      margin-top: 3.6rem;
    }
  }
  &-title {
    font-size: 5.8rem;
    margin: 0 0 2rem;
    @media (max-width: 740px) {
      font-size: 3.8rem;
    }
  }
  &-subtitle {
    margin: 0 0 3.5rem;
    text-align: center;
    @media (max-width: 740px) {
      margin-bottom: 2rem;
    }
  }
  &-percent {
    text-align: center;
    font-size: 1.6rem;
    p {
      margin: -0.5rem 0 0;
      color: #aeaead;
      font-weight: 500;
    }
  }
  &-number {
    font-size: 3.6rem;
    font-weight: 700;
    color: var(--orange);
    &.minus {
      color: #c34c4c;
    }
  }
}
</style>
