<template>
  <v-app>
    <v-main>
      <Header />
      <v-container>
        <v-row>
          <v-col><Nuxt /></v-col>
          <v-col cols="2"><Sidebar /></v-col>
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
