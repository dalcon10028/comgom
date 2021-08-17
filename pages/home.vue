<template>
  <main>
    <ReviewTemplate :review-data="reviewData"/>
    <client-only placeholder="Loading...">
      <infinite-loading spinner="spiral" @infinite="infiniteHandler">
        <div slot="no-more">더 이상 리뷰가 없습니다 새 리뷰를 작성해주세요!</div>
        <div slot="no-results">첫 번째 강의리뷰를 작성해주세요!</div>
      </infinite-loading>
    </client-only>
  </main>
</template>

<script>
import ReviewTemplate from '~/components/template/ReviewTemplate.vue'

export default {
  components: {
    ReviewTemplate
  },

  async asyncData({ $axios }) {
    const reviewData = await $axios.$get('/api/course-reviews', {
      params: {
        _limit: 9,
        _sort: 'id:DESC'
      }
    })
    return { reviewData } 
  },

  data() {
    return {
      page: 1
    }
  },

  methods: {
    async infiniteHandler($state) {
      const newReviewData = await this.$axios.$get('/api/course-reviews', {
        params: {
          _limit: 9,
          _start: 9 * this.page,
          _sort: 'id:DESC'
        }
      })
      if (newReviewData.length === 0) $state.complete()
      await setTimeout(() => {
        this.page += 1
        this.reviewData.push(...newReviewData)
        $state.loaded()
      }, 1000)
    }
  }
}
</script>

<style>

</style>