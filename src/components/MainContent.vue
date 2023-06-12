<script setup lang="ts">
import SubscribeItem from '@/components/SubscribeItem.vue'
import { useSubscriptionStore } from '@/stores/subscriptions'
import { storeToRefs } from 'pinia'
import { useModal } from '@/composables/modal'

const subscriptionStore = useSubscriptionStore()

const { subscribes } = storeToRefs(subscriptionStore)
const { unsubscribeAll } = subscriptionStore
const modal = useModal()

function logSubscriptions() {
  console.log(JSON.parse(JSON.stringify(subscribes.value)))
}

async function unsubscribe() {
  await unsubscribeAll()
  logSubscriptions()
  modal.showModal('success')
}

async function saveSubscriptions() {
  await logSubscriptions()
  modal.showModal('success')
}
</script>

<template>
  <div class="main__content">
    <div class="main__title-block">
      <h1 class="main__title">Ok, let’s change your preferences</h1>
      <p class="main__subtitle">To unsubscribe, please uncheck the appropriate box(es).</p>
    </div>

    <section v-if="subscribes" class="main__info-block">
      <SubscribeItem v-for="item in subscribes" :item="item" :key="item.site" />
    </section>

    <div class="main__content-buttons">
      <button class="btn btn-primary" @click.prevent="saveSubscriptions">
        <span>Save changes</span>
      </button>
      <button class="btn btn-secondary" @click.prevent="unsubscribe">
        <span>Unsubscribe from all <span class="hide">of the above. It’s over</span></span>
      </button>
    </div>
  </div>

  <Teleport to="#modal">
    <component :is="modal.component.value"></component>
  </Teleport>
</template>

<style lang="scss" scoped>
.main {
  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    &-buttons {
      display: flex;
      @media (max-width: 840px) {
        flex-wrap: wrap;
      }
    }
  }
  &__title {
    font-size: 3rem;
    margin: 0 0 2rem;
    @media (max-width: 740px) {
      text-align: center;
    }
    &-block {
      margin-bottom: 2.7rem;
    }
  }
  &__subtitle {
    font-size: 1.6rem;
    margin: 0;
    @media (max-width: 740px) {
      text-align: center;
    }
  }
  &__info-block {
    border: 1px solid #d3d3d3;
    border-left: none;
    border-right: none;
    padding: 1.5rem 0;
    flex: 1;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(33.8rem, 1fr));
    grid-gap: 0.5rem;
    grid-auto-rows: 17.5rem;
    @media (max-width: 740px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}
.btn {
  &:first-of-type {
    margin-right: 1.6rem;
    flex: 0 1 28rem;
    @media (max-width: 1000px) {
      margin-bottom: 1rem;
    }
    @media (max-width: 840px) {
      margin-right: 0;
    }
  }
  &:last-of-type {
    flex: 0 0 auto;
    @media (max-width: 1000px) {
      .hide {
        display: none;
      }
    }
  }
  @media (max-width: 840px) {
    flex: 1 1 100% !important;
  }
}
</style>
