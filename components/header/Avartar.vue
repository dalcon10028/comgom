<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false"
    :nudge-width="200"
    offset-y
    left
    bottom
  >
    <template #activator="{ on, attrs }">
      <v-btn 
        icon 
        v-bind="attrs"
        v-on="on">
        <v-avatar size="32">
          <v-img :src="loggedInUser.avatar" />
        </v-avatar>
      </v-btn>
    </template>

    <v-card>
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="loggedInUser.avatar" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ loggedInUser.username }}</v-list-item-title>
            <v-list-item-subtitle>{{ loggedInUser.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-list-item class="d-flex justify-center">
          <v-btn
            block
            text
            nuxt
            color="secondary"
            to="/user/profile"
          >
            Darimi 계정 관리
          </v-btn>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list>
        <v-list-item>
          <v-list-item-title>활동 목록</v-list-item-title>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-title>활동 목록</v-list-item-title>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-title>활동 목록</v-list-item-title>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-card-actions class="d-flex justify-center">
        <v-btn
          width="130"
          color="error"
          @click="logout"
        >
          로그아웃
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-menu>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  data() {
    return {
      fav: true,
      menu: false,
      message: false,
      hints: true
    }
  },
  
  computed: {
    ...mapGetters([ 'loggedInUser' ])
  },

  methods: {
    async logout() {
      await this.$auth.logout()
    }
  }
}
</script>

<style>

</style>