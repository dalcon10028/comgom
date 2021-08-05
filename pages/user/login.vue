<template>
  <main class="text-center">
    <h1>로그인</h1>
    <LoginForm />
  </main>
</template>

<script>
import LoginForm from '~/components/user/forms/LoginForm'
export default {
  components: { LoginForm },
  middleware: "guest"
}
</script>

<style>

</style>