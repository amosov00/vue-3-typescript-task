<script setup lang="ts">
const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

function toggleRadio (e: Event) {
  const value = (e.target as HTMLInputElement).checked
  emit('update:modelValue', Boolean(value))
}

</script>

<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input type="checkbox" :value="modelValue" class="visually-hidden" @input="toggleRadio">
      <span class="checkbox__custom"/>
    </label>
  </div>
</template>

<style lang="scss" scoped>
</style>
