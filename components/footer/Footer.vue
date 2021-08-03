<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="indigo lighten-1 white--text text-center"
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

      <v-card-text class="white--text pt-0">
        개인정보처리방침 이용약관 이메일 무단 수집거부 운영팀 안내 Contact Us
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        2021 — <strong>@Dalcon</strong>
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