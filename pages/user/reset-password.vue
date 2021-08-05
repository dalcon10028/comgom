<template>
  <main class="text-center">
    <h1>비밀번호 재설정</h1>
    <ResetPasswordForm :code="code"/>
  </main>
</template>

<script>
import ResetPasswordForm from '~/components/user/forms/ResetPasswordForm.vue'

export default {
  components: { ResetPasswordForm },
  
  asyncData({ route, redirect }) {
    if (!route.query.code) redirect('forgot-password');
    else return {
      code: route.query.code
    }
  },
}
</script>

<style>

</style>