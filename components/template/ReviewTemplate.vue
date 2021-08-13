<template>
  <section>
    <v-row>
      <v-col v-for="(review, idx) in reviewData" :key="idx" md="4" sm="12">
        <v-hover
          v-slot="{ hover }"
        >
          <v-card 
            :elevation="hover ? 16 : 2"
            :class="{ 'on-hover': hover }"
            @click="showReview(review.id)"
          >
            <v-card-title>{{ review.class }}</v-card-title>
            <v-card-subtitle>{{ review.professor }}</v-card-subtitle>
            <v-card-text>
              <v-rating
                :value="review.rating"
                readonly
                background-color="orange lighten-3"
                color="orange"
              ></v-rating>
              {{ review.shortReview }}
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import { mapGetters } from "vuex"

export default {
  props: {
    reviewData: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      rating: 4
    }
  },

  computed: {
    ...mapGetters(['loggedInUser'])
  },

  methods: {
    showReview(id) {
      if (confirm(`정말 확인하시겠습니까? \n확인시 5포인트가 차감됩니다.\n현재 내 포인트 ${this.loggedInUser.point}`)) {
        if (this.loggedInUser.point !== 0)
          this.$router.push(`/post/course-review/${id}`)
        else
          alert('포인트가 부족합니다.')
      }
    }
  }
}
</script>

<style>

</style>