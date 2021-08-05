<template>
  <v-app-bar id="app-bar" app hide-on-scroll color="primary">
      <v-container class="py-0 fill-height">
              <v-app-bar-title>
                  <Logo />
              </v-app-bar-title>
              <template v-for="(board, idx) in board_groups">
                  <Menu :key="idx" :board="board"/>
              </template>
            <v-spacer></v-spacer>
            <Tool />
      </v-container>
    </v-app-bar>
</template>

<script>
import Logo from './Logo.vue'
import Menu from './Menu.vue'
import Tool from './Tool.vue'

export default {
  components: { Menu, Logo, Tool },
    data() {
        return {
            board_groups: [
                { name: '안내', code: 'primary', boards: [
                    { subTitle: '공지사항', code: 'notice' },
                ] },
            ],
        }
    },

    async fetch() {
      this.board_groups = await this.$axios.$get('http://localhost:1337/board-groups');
    },

    methods: {
        async logout() {
            await this.$auth.logout();
        }
    }
}
</script>

<style lang="scss" scoped>
#app-bar {
    color: white;
}
</style>