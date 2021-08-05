<template>
  <section class="d-flex justify-center">
      <v-card width="500px" outlined class="pa-5">
        <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>

        <v-text-field
          v-model="password1"
          type="password"
          :rules="passwordRules"
          label="비밀번호 (8 글자 이상) *"
          required
        ></v-text-field>

        <v-text-field
          v-model="password2"
          type="password"
          :rules="passwordRules"
          label="비밀번호 확인 (8 글자 이상) *"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          @click="resetPassword"
        >
          비밀번호 변경
        </v-btn>
      </v-form>
      </v-card>
  </section>
</template>

<script>
export default {
  props: {
    code: {
      required: true,
      type: String
    }
  },
 data() {
  return {
    valid: true,
    password1: '',
    password2: '',
    passwordRules: [
      v => !!v || '비밀번호를 입력해주세요!',
      v => (v && v.length >= 8) || '비밀번호는 8자리 이상이여야 합니다!',
    ],
  };
 },
  methods: {
    async resetPassword() {
      try {
        if (this.password1 !== this.password2) return;
        if (!this.$refs.form.validate()) return;
        const userData = {
          code: this.code,
          password: this.password1,
          passwordConfirmation: this.password2,
        };
        await this.$axios.post('auth/reset-password', userData);
        alert('변경 성공!');
        this.$router.replace('/');
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style>

</style>