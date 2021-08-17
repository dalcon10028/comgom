<template>
  <v-bottom-navigation
    app
    grow
    fixed
    color="primary"
  >
    <v-btn nuxt to="/home">
      <span>홈</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn nuxt to="/timetable">
      <span>시간표</span>
      <v-icon>mdi-bulletin-board</v-icon>
    </v-btn>

    <v-btn nuxt to="/review/write">
      <span>새 리뷰</span>
      <v-icon>mdi-plus</v-icon>
    </v-btn>

    <v-btn nuxt to="/campus/diet-table">
      <span>캠퍼스</span>
      <v-icon>mdi-school</v-icon>
    </v-btn>

    <v-btn nuxt to="/user/profile">
      <span>마이대림</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
}
</script>

<style>

</style>