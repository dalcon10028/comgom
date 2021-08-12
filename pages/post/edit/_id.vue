<template>
  <section>
    <v-text-field
      v-model="title"
      filled
      shaped
      height="80"
      autofocus
      placeholder="제목을 입력하세요"
    >
    </v-text-field>
    <v-sheet color="white" rounded="lg">
      <client-only>
        <Tiptap v-model="content" />
      </client-only>
      <v-toolbar>
        <v-btn text large color="error" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          나가기
        </v-btn>
        <v-spacer></v-spacer>
        <Temporarily :title="title" :content="content" @changePost="changePost" />
        <v-btn large color="success" @click="submit">제출하기</v-btn>
      </v-toolbar>
    </v-sheet>
  </section>
</template>

<script>
import Temporarily from '~/components/post/Temporarily.vue'
import Tiptap from '~/components/post/Tiptap.vue'

export default {
  components: {
    Tiptap,
    Temporarily
  },

  layout: 'no-aside',

  async asyncData({ params, $axios }) {
    const postData = await $axios.$get(`/api/posts/${params.id}`);
    return { ...postData };
  },

  data() {
    return {
      title: '',
      content: '<p></p>',
    }
  },

  methods: {
    changePost({ title, content }) {
      this.title = title;
      this.content = content;
    },

    async submit() {
      const postData = {
        title: this.title,
        board: this.$route.params.id,
        author: this.$store.state.auth.user.id,
        content: this.content
      };
      await this.$axios.$put(`/api/posts/${this.$route.params.id}`, postData);
      alert('성공적으로 게시되었습니다!');
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-text-field input {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>