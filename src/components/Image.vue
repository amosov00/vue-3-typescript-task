<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const props = defineProps({
  imagePath: { type: String },
  imageSite: { type: String }
})

const imgRef = ref()
watchEffect(async () => {
  imgRef.value = (await import(/* @vite-ignore */ `../assets/img/${props.imagePath}`)).default
})
</script>

<template><img v-lazy="{ src: imgRef }" :alt="props.imageSite" /></template>
