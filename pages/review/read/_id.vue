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
        <small class="grey--text">좋아요 {{ like }}</small>
        <v-btn icon color="grey" @click="$router.go(-1)">
          <v-icon>mdi-heart-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  async asyncData({ $axios, params }) {
    const reviewData = await $axios.$get(`/api/course-reviews/${params.id}`)
    return { ...reviewData }
  },

  computed: {
    ...mapGetters(['loggedInUser'])
  }
}
</script>

<style>

</style>