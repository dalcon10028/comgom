<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      color="accent"
      class="text-center"
      width="100%"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="pt-0">
        <nuxt-link class="white--text text-decoration-none" to="terms/1">개인정보처리방침</nuxt-link> |
        <nuxt-link class="white--text text-decoration-none" to="terms/1">이용약관</nuxt-link> |
        <nuxt-link class="white--text text-decoration-none" to="terms/1">이메일 무단 수집거부</nuxt-link> |
        <nuxt-link class="white--text text-decoration-none" to="terms/1">운영팀 안내</nuxt-link> |
        <nuxt-link class="white--text text-decoration-none" to="terms/1">Contact Us</nuxt-link>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text>
        2021 — <strong>@Daerimi</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
    }),
}
</script>

<style>

</style>