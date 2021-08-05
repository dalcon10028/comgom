<template>
    <section>
        <v-btn icon color="white">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn v-if="!isAuthenticated" rounded color="white" class="primary--text"  @click="$router.push('/user/login')">
            로그인
        </v-btn>
        <template v-else>
            <v-btn rounded color="primary" @click="$router.push('/user/profile')">
                프로필
            </v-btn>
            <v-btn rounded color="primary" @click="logout">
                로그아웃
            </v-btn>
        </template>
    </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["isAuthenticated", "loggedInUser"])
    },
}
</script>

<style>

</style>