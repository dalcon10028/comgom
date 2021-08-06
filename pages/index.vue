<template>
  <main>
    <v-row>
      <v-col>
        <Carousel />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Posts :posts="postsFree" />
      </v-col>
      <v-col>
        <Posts />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Posts />
      </v-col>
      <v-col>
        <Posts />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <Posts />
      </v-col>
      <v-col>
        <Posts />
      </v-col>
    </v-row>
  </main>
</template>

<script>
import Carousel from '~/components/main/Carousel.vue'
import Posts from '~/components/main/Posts.vue'

export default {
  components: { Posts, Carousel },

  async asyncData({ $axios }) {
    const postsFree = await $axios.$get(`posts?_where[board][code]=free&_limit=8`);
    return { postsFree }
  },
}
</script>

<style>

</style>