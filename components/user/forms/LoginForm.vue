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
          @click="login"
        >
          로그인
        </v-btn>
      </v-form>
        <div class="mt-8">
            <nuxt-link to="forgot-password">비밀번호 찾기</nuxt-link> |
            <nuxt-link to="register">회원가입</nuxt-link>
        </div>
      <v-divider class="ma-4"></v-divider>

      <div class="ma-5 text-center">
        <p>소셜 계정으로 로그인</p>
      </div>
      </v-card>
  </section>
</template>

<script>
export default {
 data() {
  return {
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || '비밀번호를 입력해주세요!',
      v => (v && v.length >= 8) || '비밀번호는 8자리 이상이여야 합니다!',
    ],
  };
 },
  methods: {
    async login() {
      try {
        if (!this.$refs.form.validate()) return;
        const userData = {
          identifier: this.email,
          password: this.password
        };
        await this.$auth.loginWith('local', { data: userData });
        alert('로그인 성공!');
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style>

</style>