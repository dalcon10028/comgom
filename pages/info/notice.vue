<template>
  <main>
    <TemplateTitle :title="name" :explanation="explanation"/>
    <TableTemplate :title-id="id" :posts="posts"/>
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

  async asyncData({ $axios }) {
    const boardData = await $axios.$get('/boards', {
      params: { code: 'free' }
    });
    const { id, name, explanation } = boardData[0];
    const posts = await $axios.$get('/posts', {
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