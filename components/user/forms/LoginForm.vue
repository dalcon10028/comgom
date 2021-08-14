<template>
  <section class="d-flex justify-center">
      <v-card width="500px" outlined class="pa-5">
        <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="이메일 *"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          :rules="passwordRules"
          label="비밀번호 (8 글자 이상) *"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          :loading="loading"
          @click="login"
        >
          로그인
        </v-btn>
      </v-form>
        <div class="mt-8">
          <v-btn text nuxt color="accent" to="forgot-password">비밀번호 찾기</v-btn>
          <v-btn text nuxt color="accent" to="register">회원가입</v-btn>
        </div>
      </v-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      loading: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요!',
        v => (v && v.length >= 8) || '비밀번호는 8자리 이상이여야 합니다!'
      ]
    }
  },
  methods: {
    async login() {
      try {
        if (!this.$refs.form.validate()) return
        const userData = {
          identifier: this.email,
          password: this.password
        }
        this.loading = true
        await this.$auth.loginWith('local', { data: userData })
        this.loading = false
        this.$router.push('/')
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>

<style>

</style>