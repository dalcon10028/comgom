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

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          @click="forgotPassword"
        >
          비밀번호 찾기
        </v-btn>
      </v-form>
      </v-card>
  </section>
</template>

<script>
export default {
  middleware: "guest",
 data() {
  return {
    valid: true,
    email: '',
    emailRules: [
    v => !!v || 'E-mail is required',
    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
  };
 },
  methods: {
    async forgotPassword() {
      try {
        if (!this.$refs.form.validate()) return;
        const userData = { email: this.email };
        await this.$axios.post('/api/auth/forgot-password', userData);
        alert('이메일을 확인해주세요!');
      } catch (error) {
        alert(error);
      }
    }
  }
}
</script>

<style>

</style>