import { createStore } from 'vuex'

const store = createStore({
  state: {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  },
  getters: {
    getEmail: (state) => {
      return state.email
    },
    getPassword: (state) => {
      return state.password
    }
  },
  mutations: {
    details(state, value) {
      state.name = value.name
      state.email = value.email
      state.password = value.password
      state.confirmPassword = value.confirmPassword
    }
  },
  actions: {}
})

export default store
