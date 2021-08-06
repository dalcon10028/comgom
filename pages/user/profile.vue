<template>
<main>
    <v-card>
        <v-card-title>
        회원정보
        </v-card-title>
        <v-card-text>
            <p> 이름: {{ loggedInUser.username }}</p>
            <p> 이메일: {{ loggedInUser.email }}</p>
        </v-card-text>
    </v-card>
</main>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    layout: 'no-aside',
    middleware: "auth",
    computed: {
        ...mapGetters(['loggedInUser'])
    }
}
</script>

<style>

</style>