<template>
  <v-sheet rounded="lg" outlined>
    <v-list>
      <v-subheader>자유게시판</v-subheader>
      <v-list-item-group>
        <v-list-item
          v-for="(post, i) in posts"
          :key="i"
          nuxt
          dense
          :to="`/post/${post.id}`"
        >
          <v-list-item-content>
            <v-list-item-title>{{ post.title | titleDots }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <span class="grey--text">{{ post.author.nickname }}</span>&nbsp;
            <v-icon small color="error">mdi-heart</v-icon>&nbsp;
            <span class="error--text">{{ post.like || 0 }}</span>
          </v-list-item-icon>
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

  async fetch() {
    const posts = await this.$axios.$get(`http://localhost:1337/posts?_where[board][code]=free&_limit=8`);
    this.posts = posts;
  },
}
</script>

<style>

</style>