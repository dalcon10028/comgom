<template>
  <v-card max-width="500px" class="mx-auto pa-5">
    <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>

    <v-text-field
      v-model="password1"
      type="password"
      :rules="password1Rules"
      label="비밀번호 *"
      required
    ></v-text-field>

    <v-text-field
      v-model="password2"
      type="password"
      :rules="password2Rules"
      label="비밀번호 확인 *"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="primary"
      class="mr-4"
      block
      large
      :loading="loading"
      @click="resetPassword"
    >
      비밀번호 변경
    </v-btn>
  </v-form>
  </v-card>
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
      loading: false,
      password1: '',
      password2: '',
      password1Rules: [
        v => !!v || '비밀번호를 입력해주세요!',
        v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/.test(v) || '최소 하나의 문자 및 숫자를 포함한 8자리 입니다'
      ],
      password2Rules: [
        v => !!v || '비밀번호 확인을 입력해주세요!',
        v => (v && v === this.password1) || '비밀번호가 일치하지 않습니다!'
      ]
    }
  },
  methods: {
    async resetPassword() {
      try {
        if (this.password1 !== this.password2) return
        if (!this.$refs.form.validate()) return
        const userData = {
          code: this.code,
          password: this.password1,
          passwordConfirmation: this.password2
        }
        this.loading = true
        await this.$axios.post('/api/auth/reset-password', userData)
        alert('비밀번호 변경 성공!')
        this.$router.replace('/')
      } catch ({ response }) {
        alert(response.data.message)
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>

</style>