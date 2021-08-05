<template>
  <main>
    <TemplateTitle :title="name" :explanation="explanation"/>
    <TableTemplate :posts="posts"/>
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
    const boardData = await $axios.$get(`http://localhost:1337/boards/?code=${params.board}`);
    const { name, explanation } = boardData[0];
    const posts = await $axios.$get(`http://localhost:1337/posts?_where[board][code]=${params.board}`);
    return { name, explanation, posts }
  },
}
</script>

<style>

</style>