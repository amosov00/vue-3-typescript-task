<script setup lang="ts">
import Progressbar from '@/components/Progressbar.vue'
import AsideFooter from '@/components/AsideFooter.vue'
import { useSubscriptionStore } from '@/stores/subscriptions'

const subscriptionStore = useSubscriptionStore()

const { funMeter } = subscriptionStore
let { oldFunMeter } = subscriptionStore
</script>

<template>
  <div class="aside">
    <div class="aside__main">
      <div class="logo">
        <img v-lazy="{ src: 'src/assets/img/logo.png' }" alt="logo">
      </div>
      <div class="aside__title-block">
        <h2 class="aside__title">
          How much fun <br>do you want in your life?
        </h2>
        <a class="email" href="mailto:harry.simon@yahoo.com">harry.simon@yahoo.com</a>
      </div>

      <div class="aside__progress">
        <p class="aside__progress-title">fun you get</p>
        <div class="aside__progress-block">
          <Progressbar :percent="funMeter()"/>
          <p>
            <number
              ref="number1"
              :from="oldFunMeter"
              :to="funMeter()"
              :duration="0.7"
              easing="Power1.easeOut"
            />
            %
          </p>
        </div>
        <div class="aside__progress-text">
          <em>Subscribe</em> to all our fun sites to upgrade your fun progress
        </div>
      </div>
    </div>

    <AsideFooter />
  </div>
</template>

<style lang="scss" scoped>
.logo {
  width: 100%;
  max-width: 14rem;
  margin-bottom: 8rem;
  @media (max-width: 740px) {
    margin: 0 auto 3rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
.email {
  display: block;
  transition: 0.3s;
  @media (max-width: 740px) {
    text-align: center;
  }
}
.aside {
  position: sticky;
  top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  @media (max-width: 1087px) {
    min-height: 90vh;
  }
  @media (max-width: 740px) {
    align-items: center;
    min-height: auto;
    width: 100%;
  }
  &__main {
    @media (max-width: 740px) {
      width: 100%;
    }
  }
  &__title {
    margin-bottom: 5.8rem;
    font-size: 1.6rem;
    font-weight: 400;
    @media (max-width: 740px) {
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
    }
  }
  &__footer {
    @media (max-width: 740px) {
      display: none;
    }
  }
  &__progress {
    &-title {
      color: #b9b9b9;
      text-transform: uppercase;
      font-size: 1.1rem;
      margin-bottom: 0.7rem;
      font-weight: 700;
    }
    &-text {
      color: #aeaead;
      em {
        color: var(--link);
        font-style: normal;
      }
      @media (max-width: 740px) {
        text-align: center;
      }
    }
    &-block {
      display: flex;
      align-items: center;
      margin-bottom: 2.4rem;
      p {
        margin: 0 0 0 1rem;
        font-size: 1.8rem;
        color: var(--orange);
        min-width: 5.2rem;
        @media (max-width: 740px) {
          font-size: 2.5rem;
          min-width: 6.1rem;
        }
      }
    }
  }
}
</style>
