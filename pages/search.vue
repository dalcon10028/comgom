<template>
  <div>
    <h1>검색</h1>
    <v-text-field
      v-model="keyword"
      filled
      shaped
      height="80"
      autofocus
      placeholder="검색어를 입력하세요"
    ></v-text-field>
    <ReviewTemplate :review-data="filteredReviewData"/>
  </div>
</template>

<script>
import ReviewTemplate from '~/components/template/ReviewTemplate.vue'

export default {
  components: { ReviewTemplate },

  async asyncData({ $axios }) {
    const reviewData = await $axios.$get('/api/course-reviews', {
      params: {
        _sort: 'id:DESC'
      }
    })
    return { reviewData }
  },

  data() {
    return {
      keyword: '',
      reviewData: []
    }
  },

  computed: {
    filteredReviewData() {
      return this.keyword === '' ? [] : this.reviewData.filter(({ lecture, professor, shortReview }) =>
        new RegExp(`^${this.keyword}`, "i").test(lecture) ||
        new RegExp(`^${this.keyword}`, "i").test(professor) ||
        new RegExp(`^${this.keyword}`, "i").test(shortReview)
      )
    }
  }
}
</script>

<style>

</style>