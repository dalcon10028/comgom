<template>
  <v-app id="app">
    <v-main>
      <Header />
      <v-container id="app-body">
        <v-row>
          <v-col><Nuxt /></v-col>
        </v-row>
      </v-container>
      <BottomNavigation />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '~/components/common/Snackbar.vue'
import BottomNavigation from '~/components/footer/BottomNavigation.vue'
import Header from '~/components/header/Header.vue'

export default {
  components: { Header, BottomNavigation, Snackbar },
  middleware: 'auth'
}
</script>
    
<style lang="scss">
$body-font-family: 'Noto Sans KR';

#app {
  font-family: $body-font-family, sans-serif;
}

#app-body {
  min-height: 80vh;
}
</style>