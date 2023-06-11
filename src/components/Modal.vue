<script setup lang="ts">
import { useModal } from '@/composables/modal'
import { computed } from 'vue'

const modal = useModal()

const modalStyle = computed(() => modal.show.value ? 'display: flex;' : 'display: none;')
</script>

<template>
  <div class="modal" :style="modalStyle">
    <div class="modal-background" @click.stop="modal.hideModal()" />
    <div class="modal-content">
      <div id="modal" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 1rem;
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    &-background {
      background-color: #000000;
      opacity: 0.5;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    &-content {
      background: var(--background);
      outline: 1rem solid var(--border);
      outline-offset: -3.4rem;
      padding: 2.4rem;
      min-width: 20rem;
      min-height: 20rem;
      z-index: 101;
      @media (max-width: 740px) {
        outline: 0.5rem solid var(--border);
        outline-offset: -2rem;
        padding: 2rem;
      }
    }
  }
</style>
