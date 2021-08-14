<template>
  <v-snackbar v-model="active" timeout="2000" color="accent">
    {{ snackbarMessage }}
  </v-snackbar>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  computed: {
    ...mapGetters({ snackbarActive: 'snackbar/snackbarActive', snackbarMessage: 'snackbar/snackbarMessage'}),
    active: {
      get() { return this.snackbarActive },
      set(value) { this.UPDATE_SNACKBAR(value) }
    }
  },

  methods: {
    ...mapMutations({ UPDATE_SNACKBAR: 'snackbar/UPDATE_SNACKBAR' })
  }
}
</script>

<style></style>