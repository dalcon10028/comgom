<template>
  <main>
    <TemplateTitle :title="name" :explanation="explanation"/>
    <TableTemplate :posts="posts"/>
  </main>
</template>

<script>
import TemplateTitle from '~/components/template/common/TemplateTitle.vue'
import TableTemplate from '~/components/template/TableTemplate.vue'

export default {
  components: {
    TableTemplate,
    TemplateTitle
  },

  async asyncData({ $axios }) {
    const { name, explanation } = await $axios.$get(`/api/boards/3`)
    const notices = await $axios.$get('/api/posts', {
      params: {
        board: 2,
        notice: true,
        _sort: 'id:DESC'
      }
    })
    const posts = await $axios.$get('/api/posts', {
      params: {
        board: 3,
        _limit: 9,
        _sort: 'id:DESC'
      }
    })
    return { name, explanation, posts: notices.concat(posts) }
  }
}
</script>

<style>

</style>