<template>
  <div>
    <v-card>
      <v-card-title>
        <v-rating
          :value="rating"
          readonly
          background-color="orange lighten-3"
          color="orange"
        ></v-rating>
      </v-card-title>
      <v-card-title>{{ lecture }}</v-card-title>
      <v-card-text>
        <p>{{ author.username }} {{ created_at }}</p>
        <p>한줄요약: {{ shortReview }}</p>
        <p>리뷰: {{ review }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const reviewData = await $axios.$get(`/api/course-reviews/${params.id}`)
    return { ...reviewData }
  }
}
</script>

<style>

</style>