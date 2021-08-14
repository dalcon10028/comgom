<template>
  <section>
    <v-card outlined>
      <v-card-title>강의 리뷰 작성</v-card-title>
      <v-card-text>
        <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-rating
            v-model="rating"
            class="d-flex justify-center"
            background-color="orange lighten-3"
            color="orange"
            x-large
          ></v-rating>

          <v-text-field
            v-model="lecture"
            :rules="lectureRules"
            filled
            dense
            label="강의명"
            required
          ></v-text-field>

          <v-text-field
            v-model="professor"
            :rules="professorRules"
            filled
            dense
            label="교수명"
            required
          ></v-text-field>

          <v-text-field
            v-model="shortReview"
            :rules="shortReviewRules"
            filled
            dense
            label="한 줄 평"
            hint="한 줄 평에 작성한 내용은 노출됩니다."
            required
          ></v-text-field>
          
          <p class="mb-0">학점</p>
          <v-chip-group
            v-model="chips.credit"
            mandatory
            active-class="accent--text"
          >
            <v-chip v-for="credit in credits" :key="credit" filter>
              {{ credit }}
            </v-chip>
          </v-chip-group>

          <p class="mb-0">팀과제</p>
          <v-chip-group
            v-model="chips.team"
            mandatory
            active-class="accent--text"
          >
            <v-chip v-for="team in teams" :key="team" filter>
              {{ team }}
            </v-chip>
          </v-chip-group>

          <p class="mb-0">과제</p>
          <v-chip-group
            v-model="chips.homework"
            mandatory
            active-class="accent--text"
          >
            <v-chip v-for="homework in homeworks" :key="homework" filter>
              {{ homework }}
            </v-chip>
          </v-chip-group>

          <v-textarea
            v-model="review"
            filled
            label="리뷰"
            :rules="reviewRules"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-btn text large color="error" @click="$router.go(-1)">
          <v-icon>mdi-arrow-left</v-icon>
          나가기
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          :disabled="!valid"
          color="accent"
          class="mr-4"
          rounded
          outlined
          :loading="loading"
          @click="submit"
        >
          작성완료
        </v-btn>
      </v-card-actions>
    </v-card>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from "vuex"

export default {
  async asyncData({ $axios, params }) {
    const { id, rating, lecture, professor, shortReview, credit, team, homework, review } = await $axios.$get(`/api/course-reviews/${params.id}`)
    const chips = {
      credit: credit + '학점',
      team, homework
    }
    return { id, rating, lecture, professor, shortReview, chips, review }
  },

  data() {
    return {
      loading: false,
      valid: true,
      rating: 1,
      lecture: '',
      lectureRules: [
        v => !!v || '강의명을 작성해주세요!'
      ],
      professor: '',
      professorRules: [
        v => !!v || '교수명을 작성해주세요!'
      ],
      shortReview: '',
      shortReviewRules: [
        v => !!v || '한 줄 평을 작성해주세요!'
      ],
      review: '',
      reviewRules: [
        v => !!v || '강의 후기를 작성해주세요!',
        v => (v && v.length >= 20) || '강의 후기는 20자 이상 작성해주세요!'
      ],
      credits: ['1학점', '2학점', '3학점', '4학점'],
      teams: ['없음', '있음'],
      homeworks: ['적음', '보통', '많음'],
      chips: {
        credit: null,
        team: null,
        homework: null
      }
    }
  },

  computed: {
    ...mapGetters(['loggedInUser'])
  },

  methods: {
    ...mapMutations({ OPEN_SNACKBAR: 'snackbar/OPEN_SNACKBAR' }),

    changePost({ title, content }) {
      this.title = title
      this.content = content
    },

    async submit() {
      if (this.$refs.form.validate()) {
        const reviewData = {
          author: this.loggedInUser.id,
          rating: this.rating,
          lecture: this.lecture,
          professor: this.professor,
          shortReview: this.shortReview,
          review: this.review,
          credit: this.chips.credit + 1,
          team: this.teams[this.chips.team],
          homework: this.homeworks[this.chips.homework]
        }
        this.loading = true
        await this.$axios.put(`/api/course-reviews/${this.$route.params.id}`, reviewData)
        this.loading = false
        this.$router.push('/home')
        this.OPEN_SNACKBAR('성공적으로 수정되었습니다!')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>