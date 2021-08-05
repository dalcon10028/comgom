<template>
  <v-app-bar>
      <v-container>
          <v-row>
              <v-app-bar-title>
                 <v-btn text @click="$router.push('/')">
                     컴곰
                 </v-btn>
              </v-app-bar-title>
              <template v-for="(board, idx) in board_groups">
                  <Menu :key="idx" :board="board"/>
              </template>
            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn v-if="!isAuthenticated" rounded color="info" @click="$router.push('/user/login')">
                로그인
            </v-btn>
            <template v-else>
                <v-btn rounded color="info" @click="$router.push('/user/profile')">
                    프로필
                </v-btn>
                <v-btn rounded color="info" @click="logout">
                    로그아웃
                </v-btn>
            </template>
          </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from './Menu.vue'

export default {
  components: { Menu },
    data() {
        return {
            board_groups: [
                { name: '안내', code: 'info', boards: [
                    { subTitle: '공지사항', code: 'notice' },
                ] },
            ],
        }
    },

    async fetch() {
      this.board_groups = await this.$axios.$get('http://localhost:1337/board-groups');
    },

    computed: {
        ...mapGetters(["isAuthenticated", "loggedInUser"])
    },

    methods: {
        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>

<style>

</style>