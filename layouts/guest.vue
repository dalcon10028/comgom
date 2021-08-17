<template>
  <v-app id="app">
    <v-main>
      <v-container id="app-body">
        <Nuxt />
      </v-container>
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script>
import Snackbar from '~/components/common/Snackbar.vue'

export default {
  components: { Snackbar },
  middleware: 'guest'
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