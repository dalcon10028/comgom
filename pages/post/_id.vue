<template>
  <section>
      <h2>{{ board.name }}</h2>
      <h1>{{ title }}</h1>
  </section>
</template>

<script>
export default {
    async asyncData({ $axios, params }) {
        const postData = await $axios.$get(`http://localhost:1337/posts/${params.id}`);
        return { ...postData }
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
    }
}
</script>

<style>

</style>