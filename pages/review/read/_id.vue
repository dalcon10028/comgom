<template>
  <div>
    <v-card outlined>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          v-if="loggedInUser.id === author.id"
          nuxt
          :to="`/review/edit/${$route.params.id}`"
          icon 
          x-small
          color="accent"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </v-card-actions>
      <v-card-title>강의명: {{ lecture }}</v-card-title>
      <v-card-subtitle>교수명: {{ professor }}</v-card-subtitle>
      <v-card-text>
        <v-row>
          <v-rating
            :value="rating"
            readonly
            background-color="orange lighten-3"
            color="orange"
          ></v-rating>
        </v-row>
        <v-row dense>
          <v-col cols="3">한 줄 평:</v-col>
          <v-col class="black--text">{{ shortReview }}</v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">학점:</v-col>
          <v-col class="black--text">{{ credit }} 학점</v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">팀과제:</v-col>
          <v-col class="black--text">{{ team }}</v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">과제:</v-col>
          <v-col class="black--text">{{ homework }}</v-col>
        </v-row>
        <v-row dense>
          <v-col cols="3">리뷰:</v-col>
          <v-col class="black--text">{{ review }}</v-col>
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn text color="grey" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          돌아가기
        </v-btn>
        <v-spacer></v-spacer>
        <small class="grey--text">좋아요 {{ likeLength }}</small>
        <v-btn icon :color="likeData ? 'red' : 'grey'" :loading="loading" @click="toggleLike">
          <v-icon>mdi-heart{{ likeData ? '' : '-outline' }}</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  async asyncData({ $axios, params, store }) {
    const reviewData = await $axios.$get(`/api/course-reviews/${params.id}`)
    const likeData = reviewData.likes.find(({ author }) => store.getters.loggedInUser.id === author)
    return { ...reviewData, likeData, likeLength: reviewData.likes.length }
  },

  data() {
    return {
      loading: false
    }
  },
  
  head() {
    return {
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: `강의 리뷰 ${this.lecture}`
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.shortReview
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://i.ibb.co/1vYxX4S/og.png'
        }
      ]
    }
  },

  computed: {
    ...mapGetters(['loggedInUser'])
  },

  methods: {
    async toggleLike() {
      this.loading = true
      try {
        if (this.likeData) {
          await this.$axios.delete(`/api/likes/${this.likeData.id}`)
          this.likeData = null
          this.likeLength = this.likeLength - 1
        } else {
          const likeData = await this.$axios.$post('/api/likes', {
            author: this.loggedInUser.id,
            course_review: this.$route.params.id
          })
          this.likeData = likeData
          this.likeLength = this.likeLength + 1
        }
      } catch ({ response }) {
        alert(response.data.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>

</style>