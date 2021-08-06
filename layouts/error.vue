<template>
  <v-app dark class="text-center">
    <v-sheet class="pa-3" outlined rounded="lg">
      <template v-if="error.statusCode === 404">
        <v-img src="/404.png" max-height="300"></v-img>
        <h1> {{ pageNotFound }} </h1>
      </template>
      <h1 v-else>
        {{ otherError }}
      </h1>
      <NuxtLink to="/">
        홈으로
      </NuxtLink>
    </v-sheet>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '페이지를 찾을 수가 없대림..ㅠ',
      otherError: '뭔가 문제가 있대림..ㅠ'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
