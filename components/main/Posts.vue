<template>
  <v-sheet rounded="lg" outlined>
    <v-list>
      <v-subheader>최근 게시물</v-subheader>
      <v-list-item-group>
        <template v-for="(post, i) in posts">
          <v-divider :key="i"></v-divider>
          <v-list-item
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
        </template>
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


  props: {
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>