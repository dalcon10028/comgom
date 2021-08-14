<template>
 <main class="text-center">
     <h1>회원가입</h1>
     <RegisterForm />
 </main>
</template>

<script>
import RegisterForm from '~/components/user/forms/RegisterForm.vue'
export default {
  components: {
    RegisterForm
  },
  middleware: "guest"
}
</script>

<style>

</style>