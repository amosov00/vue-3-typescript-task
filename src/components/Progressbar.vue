<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  percent: number
}>()

const progressWidth = computed(() => {
  return `width:${String(props.percent)}%`
})

</script>

<template>
  <div class="progressbar">
    <div class="progressbar__line" :style="progressWidth" />
  </div>
</template>

<style lang="scss" scoped>
.progressbar {
  background: var(--text);
  border-radius: 1rem;
  width: 100%;
  height: 1.3rem;
  position: relative;
  overflow-x: hidden;
  &__line {
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    transition: all 1s cubic-bezier(.10, .10, .25, .90) 0.3s;
    background: var(--orange);
    z-index: 1;
  }
}
</style>
