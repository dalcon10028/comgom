<template>
  <main>
    <TemplateTitle :title="name" :explanation="explanation"/>
    <TableTemplate :title-id="$route.params.id" :posts="posts"/>
  </main>
</template>

<script>
import TemplateTitle from '~/components/template/common/TemplateTitle.vue';
import TableTemplate from '~/components/template/TableTemplate.vue'

export default {
  components: {
    TableTemplate,
    TemplateTitle
  },

  async asyncData({ $axios, params }) {
    const { name, explanation } = await $axios.$get(`/boards/${params.id}`);
    const notices = await $axios.$get('/posts', {
      params: {
        board: 2,
        notice: true,
        _sort: 'id:DESC'
      }
    });
    const posts = await $axios.$get('/posts', {
      params: {
        board: params.id,
        _limit: 9,
        _sort: 'id:DESC'
      }
    });
    return { name, explanation, posts: notices.concat(posts) }
  },

  created() {
  }
}
</script>

<style>

</style>