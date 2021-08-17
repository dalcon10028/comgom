<template>
  <section>
    <v-card max-width="500px" class="mx-auto pa-5" outlined>
      <v-alert type="error" :value="alert" transition="scale-transition">
        <strong>아이디</strong>나 <strong>이메일</strong>이 이미 존재합니다
      </v-alert>

      <v-form ref="form" v-model="valid" class="mt-3" lazy-validation>
        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="아이디"
          required
          outlined
          filled
        ></v-text-field>

        <v-text-field
          v-model="password1"
          type="password"
          :rules="password1Rules"
          label="비밀번호 (8자리 이상)"
          required
          outlined
          filled
        ></v-text-field>

        <v-text-field
          v-model="password2"
          type="password"
          :rules="password2Rules"
          label="비밀번호 확인"
          required
          outlined
          filled
        ></v-text-field>
        
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="대림대학교 이메일 @email.daelim.ac.kr"
          hint="@email.daelim.ac.kr을 제외하고 입력해주세요"
          required
          outlined
          filled
        ></v-text-field>

        <v-text-field
          v-model="nickname"
          :rules="nicknameRules"
          label="닉네임"
          required
          outlined
          filled
        ></v-text-field>

        <v-text-field
          v-model="major"
          :rules="majorRules"
          label="학과 또는 학부"
          required
          outlined
          filled
        ></v-text-field>

        <v-checkbox
          :rules="[v => !!v || '개인정보 취급방침 동의에 체크해주세요']"
          required
        >
          <template #label>
            <div>
              <a 
                target="_blank"
                href="https://assorted-poet-da7.notion.site/0d17f8c78fe24c209b62ba74493d3a80"
                @click.stop
              >개인정보 취급방침</a>
              에 동의합니다.
            </div>
          </template>
        </v-checkbox>

        <v-btn
          :disabled="!valid"
          color="primary"
          class="mr-4"
          block
          large
          :loading="loading"
          @click="register"
        >
          회원가입
        </v-btn>
    </v-form>
    <v-btn class="mt-8" text color="accent" nuxt to="/user/login">로그인으로 돌아가기</v-btn>
    <v-divider class="ma-4"></v-divider>
    <div class="ma-5 text-center">
      <StudentCard />
    </div>
    </v-card>
  </section>
</template>

<script>
import StudentCard from './StudentCard.vue'
export default {
  components: { StudentCard },
  data() {
    return {
      valid: true,
      alert: false,
      loading: false,
      email: '',
      emailRules: [
        v => !!v || '이메일을 입력해주세요!',
        v => /^[A-Za-z0-9+]*$/.test(v) || '@email.daelim.ac.kr을 제외한 이메일을 입력해주세요'
      ],
      username: '',
      usernameRules: [
        v => !!v || '아이디를 입력해주세요!',
        v => v.length >= 5 || '아이디는 5글자 이상으로 입력해주세요'
      ],
      nickname: '',
      nicknameRules: [
        v => !!v || '닉네임을 입력해주세요!'
      ],
      major: '',
      majorRules: [
        v => !!v || '학과/학부를 입력해주세요!'
      ],
      password1: '',
      password1Rules: [
        v => !!v || '비밀번호를 입력해주세요!',
        v => /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d$@$!%*#?&]{8,}$/.test(v) || '최소 하나의 문자 및 숫자를 포함한 8자리 입니다'
      ],
      password2: '',
      password2Rules: [
        v => !!v || '비밀번호 확인을 입력해주세요!',
        v => (v && v === this.password1) || '비밀번호가 일치하지 않습니다!'
      ]
    }
  },
  methods: {
    async register() {
      if (!this.$refs.form.validate()) return
      try {
        this.$axios.setToken(false)
        const userData = {
          username: this.username,
          email: this.email + '@email.daelim.ac.kr',
          nickname: this.nickname,
          password: this.password2,
          major: this.major
        }
        this.loading = true
        await this.$axios.post("/api/auth/local/register", userData)
        alert('메일을 확인해주세요! \n만약 메일이 보이지 않으신다면 스펨메일함을 확인해주세요!')
        window.open('https://outlook.office.com/mail/inbox')
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