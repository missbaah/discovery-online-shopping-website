import { computed } from 'Vue'
import { useStore } from 'Vuex'

export default function useCurrentUser() {
  const store = useStore()

  const currentUser = computed(() => {
    return store.state.name
  })

  return {
    currentUser
  }
}
