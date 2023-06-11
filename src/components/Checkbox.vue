<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (event: 'update:modelValue', value: boolean): void
}>()

function toggleCheck (e: Event) {
  const value = (e.target as HTMLInputElement).checked
  emit('update:modelValue', Boolean(value))
}

const checkValue = computed(() => {
  if (props.modelValue) {
    return 'Subscribed'
  } else {
    return 'Unsubscribed'
  }
})

</script>

<template>
  <div class="checkbox" :class="{'active': modelValue}">
    <p>{{ checkValue }}</p>
    <label class="checkbox__label">
      <input type="checkbox" :checked="modelValue" class="visually-hidden" @input="toggleCheck">
      <span class="checkbox__custom"/>
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  position: relative;
  align-items: center;
  flex-direction: row;
  width: fit-content;
  font-weight: 600;
  p {
    font-size: 1rem;
    color: #9b9b9b;
    font-weight: 400;
    transition: 0.3s;
    margin: 0 0 0.7rem;
  }
  input {
    & + span {
      position: relative;
      display: inline-block;
      width: 5.6rem;
      height: 2.9rem;
      background: white;
      border: 1px solid var(--border-item);
      border-radius: 1.5rem;
      vertical-align: middle;
      transition: 0.3s;
      cursor: pointer;
      &:before {
        content: '';
        position: absolute;
        width: 2.1rem;
        height: 2.1rem;
        top: 0.3rem;
        left: 0.3rem;
        background-color: #979797;
        border-radius: 50%;
        transition: background-color 0.2s, left 0.2s;
      }
    }
    &:checked + span {
      &:before {
        left: calc(100% - 2.4rem);
        background-color: #58b486;
      }
    }
  }
  &.active {
    p {
      color: var(--text);
    }
  }
}
</style>
