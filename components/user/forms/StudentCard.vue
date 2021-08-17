<template>
  <v-dialog
    v-model="dialog"
    scrollable
    max-width="500px"
  >
    <template #activator="{ on, attrs }">
      <v-btn 
        text 
        color="accent"         
        v-bind="attrs"
        v-on="on">
        학생증 인증으로 회원가입
      </v-btn>
    </template>
    <v-card>
      <v-card-title>학생증 인증으로 회원가입</v-card-title>
      <v-divider></v-divider>
      <v-card-text style="height: 300px;">
        <p>
        대리미는 대림대학교 학생인증 후에 서비스 이용이 가능합니다.
        </p>
        <p>
        학교 웹메일로 가입하여 회원가입과 동시에 자동인증 방법외에 아래의 방법으로도 가입이 가능합니다.
        </p>
        <p>
          1. 아래 버튼을 클릭해 <strong>대리미 카톡 채널</strong>에 접속한다.
        </p>
        <p>
        2. 대림대학교 스마트캠퍼스 앱의 <strong>학생증 사진 또는 LMS 로그인 사진</strong>을 캡쳐해 카톡채널로 전송한다.
        </p>
        <p>
        3. 원하는 <strong>아이디, 이메일, 닉네임, 학과정보</strong>를 기입한다.
        </p>
        <p>
        4. 운영자 확인후 <strong>임시비밀번호를 발급</strong>받아 로그인한다.
        </p>
        <p>
        5. 비밀번호를 <strong>변경</strong>해 사용한다.
        </p>

        ※ 학생 인증용으로 제출하신 이미지 파일은 확인 후 <strong class="error--text">바로 삭제처리</strong> 합니다.
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn
          color="blue darken-1"
          text
          href="http://pf.kakao.com/_mtpNs/chat"
        >
          대리미 채널
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  }
}
</script>

<style>

</style>