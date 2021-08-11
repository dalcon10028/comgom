<template>
  <v-sheet rounded="lg" outlined>
    <v-list>
      <v-subheader>인기 게시물</v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="(post, i) in posts"
          :key="i"
          dense
          nuxt
          :to="`/post/${post.id}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ post.title | titleDots }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-sheet>
</template>

<script>
export default {
  filters: {
    titleDots(title) {
      return title.length > 20 ? title.substring(0, 20) + '...' : title
    }
  },

  data() {
    return {
      posts: []
    }
  },

  async created() {
    this.posts = await this.$axios.$get(`/api/posts?_where[board][code]=free&_limit=5`);
  },
}
</script>

<style>

</style>