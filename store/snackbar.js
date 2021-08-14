export const state = () => ({
  active: false,
  message: ''
})

export const getters = {
  snackbarActive(state) {
    return state.active
  },

  snackbarMessage(state) {
    return state.message
  }
}

export const mutations = {
  OPEN_SNACKBAR(state, message) {
    state.message = message
    state.active = true
  },
  
  UPDATE_SNACKBAR(state, value) {
    state.active = value
  }
}