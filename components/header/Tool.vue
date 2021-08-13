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
      <v-text-field
          v-model="keyword"
          filled
          autofocus
          label="검색어를 입력하세요"
          required
          solo
          background-color="white"
          prepend-inner-icon="mdi-magnify"
          hide-details
          @keydown.enter="search"
      ></v-text-field>
    </v-dialog>
      <v-btn 
          v-if="!isAuthenticated" 
          rounded 
          color="white" 
          class="primary--text"
          nuxt
          to="/user/login">
          로그인
      </v-btn>
      <template v-else>
        <v-btn 
          icon
          nuxt
          to="/user/profile">
          <v-avatar size="32">
            <v-img :src="loggedInUser.avatar" />
          </v-avatar>
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
    }
  },

  computed: {
    ...mapGetters(["isAuthenticated", "loggedInUser"])
  },

  methods: {
    search (e) {
      e.preventDefault();
      this.dialog = false;
      this.$router.push({ path: '/search', query: { keyword: this.keyword } });
      this.keyword = '';
    },
  }
}
</script>

<style>

</style>