<template>
  <main class="text-center">
    <section class="mb-8">
      <h1
        class="logo primary--text"
        text 
        x-large
      >
        대리미
      </h1>
      <h3>대림인의 강의리뷰</h3>
    </section>
    <LoginForm />
  </main>
</template>

<script>
import LoginForm from '~/components/user/forms/LoginForm'

export default {
  components: { LoginForm },
  layout: 'guest'
}
</script>

<style lang="scss" scoped>
.logo {
  font-size: 3rem; 
  font-family: 'Maplestory Light';
}
</style>