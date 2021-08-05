<template>
<main>
    회원정보
    <p> 이름: {{ loggedInUser.username }}</p>
    <p> 이메일: {{ loggedInUser.email }}</p>
</main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    middleware: "auth",
    computed: {
        ...mapGetters(['loggedInUser'])
    }
}
</script>

<style>

</style>