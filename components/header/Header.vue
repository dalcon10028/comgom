<template>
  <v-app-bar 
    app 
    dense
    elevate-on-scroll
    >
    <v-container class="py-0 fill-height">
      <v-app-bar-title>
        <v-btn
          text
          nuxt
          color="primary"
          href="/">
          대리미
        </v-btn>
      </v-app-bar-title>
      <v-spacer></v-spacer>
      <div>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-badge color="error" dot>
            <v-icon>mdi-bell-outline</v-icon>
          </v-badge>
        </v-btn>
      </div>
    </v-container>
  </v-app-bar>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>