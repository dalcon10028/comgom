<template>
  <main>
    <v-row>
      <v-col>
        <Carousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Notice />
      </v-col>
      <v-col>
        <Notice />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Notice />
      </v-col>
      <v-col>
        <Notice />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Notice />
      </v-col>
      <v-col>
        <Notice />
      </v-col>
    </v-row>
  </main>
</template>

<script>
import Carousel from '~/components/main/Carousel.vue'
import Notice from '~/components/main/Notice.vue'


export default {
  components: { Notice, Carousel },

}
</script>

<style>

</style>