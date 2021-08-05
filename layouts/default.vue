<template>
  <v-app id="app">
    <v-main class="grey lighten-3">
      <Header />
      <v-container>
        <v-row>
          <v-col><Nuxt /></v-col>
          <v-col cols="3"><Sidebar /></v-col>
        </v-row>
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from '~/components/aside/Sidebar.vue'
import Footer from '~/components/footer/Footer.vue'
import Header from '~/components/header/Header.vue'
export default {
  components: { Header, Footer, Sidebar }
}
</script>

<style lang="scss">
$body-font-family: 'Noto Sans KR';

#app {
  background-color: #f8f8f8;
  font-family: $body-font-family, sans-serif;
}
</style>
