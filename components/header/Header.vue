<template>
  <v-app-bar 
    app 
    dense
    elevate-on-scroll
    >
    <v-container class="py-0 fill-height">
      <v-app-bar-title>
        <v-btn
          text
          nuxt
          color="primary"
          href="/">
          대리미
        </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn icon nuxt to="/search">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon @click="goHistories">
          <v-badge color="error" overlap :value="notice" :content="count">
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      count: 0
    }
  },
  
  computed: {
    ...mapGetters(['loggedInUser']),
    notice() {
      return this.count !== 0
    }
  },

  created() {
    this.fetchNotice()
  },

  methods: {
    async fetchNotice() {
      this.count = await this.$axios.$get('/api/histories/count', {
        params: {
          receiver: this.loggedInUser.id,
          checked: false
        }
      })
    },

    goHistories() {
      this.$router.push('/user/history')
      this.count = 0
    }
  }
}
</script>

<style lang="scss" scoped>
</style>