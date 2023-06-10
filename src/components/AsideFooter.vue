<script setup lang="ts">
import Progressbar from '@/components/Progressbar.vue'
</script>

<template>
  <div class="aside__main">
    <div class="logo">
      <img v-lazy="{ src: 'src/assets/img/logo.png' }" alt="logo">
    </div>
    <h2 class="aside__title">
      How much fun<br>do you want in your life?
    </h2>
    <a href="mailto:harry.simon@yahoo.com">harry.simon@yahoo.com</a>

    <Progressbar />
  </div>

  <div class="aside__footer">
    <p class="aside__footer-address">
      EntertainMeMore<br>11807 Westheimer 550 PMB617<br>Houston, TX 77077
    </p>
    <a class="aside__footer-link" href="mailto:email@entertainmemore.com">email@entertainmemore.com</a>
    <p>
      <a href="#" class="aside__footer-link">Privacy Policy</a>
    </p>
  </div>
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
  &__main {
  }
  &__title {
    margin-bottom: 5.8rem;
  }
  &__footer {
    position: sticky;
    bottom: 2rem;
  }
}
</style>
