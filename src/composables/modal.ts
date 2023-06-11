import { ref, shallowRef } from 'vue'
import SuccessWindow from '@/components/SuccessWindow.vue'

const show = ref(false)
const component = shallowRef()

export function useModal() {
  return {
    show,
    component,
    showModal: (type: string) => {
      show.value = true
      const html = document.querySelector('html')
      if (html) {
        html.classList.add('fixed')
      }
      switch (type) {
        case 'success': return component.value = SuccessWindow
      }
    },
    hideModal: () => {
      show.value = false
      const html = document.querySelector('html')
      if (html) {
        html.classList.remove('fixed')
      }
    },
  }
}
