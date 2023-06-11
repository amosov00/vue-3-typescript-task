import { ref } from 'vue'
import { defineStore } from 'pinia'
/* @ts-ignore */
import subscribe from '@/data/subscribe.json' assert { type: 'json' }
import { type SubscriptionStore } from '@/data/types'

export const useSubscriptionStore = defineStore('subscriptions', () => {
  const subscribes = ref<Array<SubscriptionStore>>([])
  const oldFunMeter = ref(0)

  function funMeter(): number {
    const active = subscribes.value?.filter((item) => item.subscribed)
    console.log('store:', active)
    if (active.length) {
      return Math.floor((active.length * 100) / subscribes.value.length)
    }
    return 0
  }

  function setOldFunMeter(val: number) {
    oldFunMeter.value = val
  }

  function unsubscribeAll(): void {
    subscribes.value?.map((item, index) => (subscribes.value[index].subscribed = false))
  }

  function fetchSubscribes() {
    subscribes.value = subscribe
  }

  return { subscribes, oldFunMeter, funMeter, fetchSubscribes, unsubscribeAll, setOldFunMeter }
})
