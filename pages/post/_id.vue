<template>
  <section>
    <v-card>
      <v-card-title class="text-h3">{{ title }}</v-card-title>
      <v-card-subtitle>
          {{ author.username }} {{ created_at }} 조회수 {{ view }} 좋아요 {{ like }}
      </v-card-subtitle>
      <v-card-text v-html="content"></v-card-text>
      <v-card-actions v-if="author.id === $store.state.auth.user.id">
        <v-btn 
          large 
          outlined 
          color="accent"
          nuxt
          :to="`/post/edit/${$route.params.id}`"
        >수정</v-btn>
        <v-btn
          large 
          outlined 
          color="error"
          @click="deletePost"
          >삭제</v-btn>
        <v-spacer></v-spacer>
        <v-btn x-large icon color="error">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
    <Comments :comments-data="commentsData"/>
  </section>
</template>

<script>
import Comments from '~/components/post/Comments.vue';

export default {
    components: {
        Comments
    },

    async asyncData({ $axios, params }) {
        const postData = await $axios.$get(`/api/posts/${params.id}`);
        const commentsData = await $axios.$get(`/api/comments?post=${params.id}`);
        return { ...postData, commentsData }
    },

  data() {
    return {
      id: null,
      title: null,
      created_at: null,
      updated_at: null,
      view: null,
      author: { id: null, username: null },
      content: null,
      like: null,
    }
  },

  methods: {
    async deletePost() {
      if (confirm('정말 게시물을 삭제하시겠습니까?')) {
        await this.$axios.delete(`/api/posts/${this.$route.params.id}`);
        alert('게시물이 성공적으로 삭제되었습니다!');
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style>

</style>