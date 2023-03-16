import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCurrentUser() {
  const store = useStore()

  const currentUser = computed(() => {
    return store.state.name
  })

  return {
    currentUser
  }
}
