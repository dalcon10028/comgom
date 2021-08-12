<template>
  <main>
    <TemplateTitle :title="name" :explanation="explanation"/>
    <NoticeTemplate :title-id="id" :posts="posts" />
  </main>
</template>

<script>
import TemplateTitle from '~/components/template/common/TemplateTitle.vue';
import NoticeTemplate from '~/components/template/NoticeTemplate.vue';

export default {
  components: {
    TemplateTitle,
    NoticeTemplate
  },

  async asyncData({ $axios }) {
    const boardData = await $axios.$get('/api/boards', {
      params: { code: 'notice' }
    });
    const { id, name, explanation } = boardData[0];
    const posts = await $axios.$get('/api/posts', {
      params: {
        board: 2,
        notice: true,
        _sort: 'id:DESC'
      }
    });
    return { id, name, explanation, posts }
  },
}
</script>

<style>

</style>