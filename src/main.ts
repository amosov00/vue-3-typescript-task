import '../public/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import VueLazyLoad from 'vue3-lazyload'
/* @ts-ignore */
import VueNumber from 'vue-number-animation'

const pinia = createPinia()
const app = createApp(App)

app.use(VueLazyLoad, {
  loading: '',
  error: ''
})
app.use(VueNumber)

app.use(pinia)
app.mount('#app')
