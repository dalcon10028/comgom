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
          :rules="emailRules"
          label="비밀번호 (8 글자 이상) *"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          @click="validate"
        >
          로그인
        </v-btn>
      </v-form>
        <div class="mt-8">
            <nuxt-link to="finduser">계정 찾기</nuxt-link> |
            <nuxt-link to="signin">회원가입</nuxt-link>
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
    password: '',
    nameRules: [
    v => !!v || 'Name is required',
    v => (v && v.length <= 10) || 'Name must be less than 10 characters',
    ],
    email: '',
    emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    };
 }
}
</script>

<style>

</style>