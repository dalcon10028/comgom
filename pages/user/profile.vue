<template>
<main>
    <v-card outlined>
        <h1 class="mt-10 text-center">마이페이지</h1>
        <v-card-title class="d-flex justify-center">
            <v-avatar size="128">
                <v-img :src="loggedInUser.avatar" />
            </v-avatar>
        </v-card-title>
        <v-card-text class="mt-10">
          <v-card class="mx-auto my-2" outlined max-width="300">
            <v-card-title>아이디</v-card-title>
            <v-card-subtitle>{{ loggedInUser.username }}</v-card-subtitle>
          </v-card>
          <v-card class="mx-auto my-2" outlined max-width="300">
            <v-card-title>이메일</v-card-title>
            <v-card-subtitle>{{ loggedInUser.email }}</v-card-subtitle>
          </v-card>
          <v-card class="mx-auto my-2" outlined max-width="300">
            <v-card-title>닉네임</v-card-title>
            <v-card-subtitle>{{ loggedInUser.nickname }}</v-card-subtitle>
          </v-card>
        </v-card-text>
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
</main>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  computed: {
    ...mapGetters(['loggedInUser'])
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