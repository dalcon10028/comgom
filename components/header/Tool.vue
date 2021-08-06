<template>
    <section>
        <v-dialog
      v-model="dialog"
      width="500"
    >
      <template #activator="{ on, attrs }">
        <v-btn 
            icon 
            color="white"  
          v-bind="attrs"
          v-on="on"
          >
            <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </template>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        >
        <v-text-field
            v-model="keyword"
            filled
            flat
            :rules="keywordRules"
            label="검색어를 입력하세요"
            required
            solo
            background-color="white"
            prepend-inner-icon="mdi-magnify"
            hide-details
            @keydown.enter="validate"
        ></v-text-field>
        </v-form>
    </v-dialog>
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
    data() {
        return {
            dialog: false,
            valid: true,
            keyword: '',
            keywordRules: [ v => !!v ]
        }
    },

    computed: {
        ...mapGetters(["isAuthenticated", "loggedInUser"])
    },
    
    methods: {
        validate () {
            if (!this.$refs.form.validate()) return ;
            this.$router.push(`/search/${this.keyword}`)
            this.dialog = false;
        },
    }
}
</script>

<style>

</style>