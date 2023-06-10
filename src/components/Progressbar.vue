<script setup lang="ts">

</script>

<template>
  <div class="logo">
    <img v-lazy="{ src: 'src/assets/img/logo.png' }" alt="logo">
  </div>
  <h2 class="aside__title">
    How much fun<br>do you want in your life?
  </h2>
  <a href="mailto:harry.simon@yahoo.com">harry.simon@yahoo.com</a>

  <Progressbar />
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 14rem;
  margin-bottom: 8rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.aside {
  &__title {
    margin-bottom: 5.8rem;
  }
}
</style>
