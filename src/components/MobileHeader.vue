<script setup lang="ts">
import Aside from '@/components/Aside.vue'
</script>

<template>
  <div class="header__mobile">
    <Aside />
  </div>
</template>

<style lang="scss">
.header__mobile {
  position: fixed;
  top: 0;
  left: 2.5rem;
  width: calc(100% - 5rem);
  padding: 1.5rem 0;
  background: var(--background);
  z-index: 6;

  .aside {
    &__main {
      display: flex;
      flex-wrap: wrap;
      .logo {
        display: none;
      }
    }
    &__progress {
      flex: 1 1 100%;
    }
    &__title {
      &-block {
        display: none;
      }
    }
  }
}
</style>
