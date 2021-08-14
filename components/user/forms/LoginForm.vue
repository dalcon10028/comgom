<template>
  <section>
    <v-card max-width="500px" class="mx-auto pa-5" outlined>
      <v-alert type="error" :value="alert" transition="scale-transition">
        <strong>아이디</strong>나 <strong>비밀번호</strong>가 일치하지 않습니다
      </v-alert>
      <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>
      <v-text-field
        v-model="username"
        :rules="usernameRules"
        outlined
        filled
        label="아이디"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        type="password"
        :rules="passwordRules"
        outlined
        filled
        label="비밀번호"
        required
        @keypress.enter="login"
      ></v-text-field>

      <v-checkbox
        v-model="saveUsername"
        label="아이디 저장"
      ></v-checkbox>

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
      alert: false,
      valid: true,
      loading: false,
      saveUsername: false,
      username: '',
      usernameRules: [
        v => !!v || '아이디를 입력해주세요!'
      ],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요!'
      ]
    }
  },

  mounted() {
    const username = JSON.parse(localStorage.getItem('daelimi-username'))?.username
    if (username) {
      this.saveUsername = true
      this.username = username
    }
  },

  methods: {
    async login() {
      if (!this.$refs.form.validate()) return
      if (this.saveUsername)
        localStorage.setItem('daelimi-username', JSON.stringify({ username: this.username }))
      else localStorage.removeItem('daelimi-username')
      try {
        const userData = {
          identifier: this.username,
          password: this.password
        }
        this.loading = true
        await this.$auth.loginWith('local', { data: userData })
        this.$router.push('/')
      } catch ({ response }) {
        if (response.status === 400)
          this.alert = true
        else
          alert(response.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>

</style>