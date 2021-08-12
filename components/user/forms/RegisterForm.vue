<template>
  <section class="d-flex justify-center">
    <v-card width="500px" outlined class="pa-5">
      <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="대림대학교 이메일 * @email.daelim.ac.kr"
          required
        ></v-text-field>

        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="이름 *"
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
          @click="register"
        >
          회원가입
        </v-btn>
    </v-form>
    <v-btn class="mt-8" text color="accent">로그인으로 돌아가기</v-btn>
    <v-divider class="ma-4"></v-divider>
    <div class="ma-5 text-center">
      <v-btn text color="accent">학생증 인증으로 회원가입</v-btn>
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
        v => !!v || '이메일을 입력해주세요!',
        v => /.+@email[.]daelim[.]ac[.]kr/.test(v) || '유효한 대림대학교 이메일이 아닙니다!',
      ],
      username: '',
      usernameRules: [
        v => !!v || '이름을 입력해주세요!',
      ],
      password: '',
      passwordRules: [
        v => !!v || '비밀번호를 입력해주세요!',
        v => (v && v.length >= 8) || '비밀번호는 8자리 이상이여야 합니다!',
      ],
    };
 },
  methods: {
    async register() {
      if (!this.$refs.form.validate()) return;
      try {
        this.$axios.setToken(false);
        const userData = {
          email: this.email,
          username: this.username,
          password: this.password
        }
        await this.$axios.post("/api/auth/local/register", userData);
        alert('이메일을 확인해주세요! 이메일이 보이지 않으신다면 스펨메일함을 확인해주세요!');
        window.open('https://outlook.office.com/mail/inbox');
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style>

</style>