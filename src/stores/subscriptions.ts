import { ref, computed, UnwrapRef, Ref, ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import subscribe from '@/data/subscribe.json'

interface SubscriptionStore {
  site: string,
  subscribed: boolean
}

export const useSubscriptionStore = defineStore('subscriptions', () => {
  const subscribes: Ref<UnwrapRef<SubscriptionStore[]>> = ref(...subscribe)
  const oldFunMeter = ref(null)

  const funMeter: ComputedRef<number> = computed(() => {
    const active = subscribes.value.filter(item => item.subscribed)
    return (active.length * 100) / subscribes.value.length
  })

  function changeSubscribes(site: string, activity: boolean) {
    const index = subscribes.value.findIndex(item => item.site === site)
    subscribes.value[index].subscribed = activity
  }

  return { subscribes, oldFunMeter, funMeter, changeSubscribes }
})
