<template>
<main>
    <v-card outlined class="text-center">
        <h1 class="mt-10">마이페이지</h1>
        <v-card-title class="d-flex justify-center">
            <v-avatar size="128">
                <v-img :src="loggedInUser.avatar || '/no-img.png'" />
            </v-avatar>
        </v-card-title>
        <v-card-text class="mt-10">
            <h2 class="mb-10">닉네임 : {{ loggedInUser.username }}</h2>
            <h2 class="mb-10">이메일: {{ loggedInUser.email }}</h2>
        </v-card-text>
    </v-card>
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