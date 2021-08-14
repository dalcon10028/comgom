<template>
  <main>
    <ReviewTemplate :review-data="reviewData"/>
  </main>
</template>

<script>
import ReviewTemplate from '~/components/template/ReviewTemplate.vue'

export default {
  components: {
    ReviewTemplate
  },

  async asyncData({ $axios }) {
    const reviewData = await $axios.$get('/api/course-reviews')
    return { reviewData } 
  }
}
</script>

<style>

</style>