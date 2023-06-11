import '../public/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
/* @ts-ignore */
import VueNumber from 'vue-number-animation'

import { useSubscriptionStore } from '@/stores/subscriptions'
const { fetchSubscribes } = useSubscriptionStore()

const app = createApp(App)
app.use(createPinia())

app.use(VueLazyLoad, {
  loading: '',
  error: ''
})
app.use(VueNumber)
async function fetch () {
  await fetchSubscribes()
}
fetch().then(r => {
  app.mount('#app')
})
