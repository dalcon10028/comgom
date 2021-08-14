<template>
  <section>
    <v-card max-width="500px" class="mx-auto pa-5 mt-10" outlined>
      <v-alert type="error" :value="alert" transition="scale-transition">
        존재하지 않는 <strong>이메일</strong>입니다
      </v-alert>
      <p>가입하신 이메일을 입력해주세요</p>
      <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="이메일 *"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          :loading="loading"
          @click="forgotPassword"
        >
          비밀번호 찾기
        </v-btn>
      </v-form>
      <v-btn class="mt-8" text color="accent" nuxt to="/user/login">로그인으로 돌아가기</v-btn>
    </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      alert: false,
      loading: false,
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요!',
        v => /.+@.+\..+/.test(v) || '이메일 형식이 아닙니다.'
      ]
    }
  },
  methods: {
    async forgotPassword() {
      try {
        if (!this.$refs.form.validate()) return
        const userData = { email: this.email }
        this.loading = true
        await this.$axios.post('/api/auth/forgot-password', userData)
        alert('이메일을 확인해주세요!')
      } catch ({ response }) {
        if (response.status === 400)
          this.alert = true
        else console.log(response)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>

</style>