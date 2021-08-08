<template>
  <v-bottom-sheet
    v-model="sheet"
  >
    <template #activator="{ on, attrs }">
      <v-btn
        class="mr-4 grey--text"
        large
        v-bind="attrs"
        v-on="on"
        @click="fetchTempPosts"
      >
        임시저장
      </v-btn>
    </template>
    <v-sheet
      class="d-flex flex-column align-center"
      height="500px"
    >
      <v-card class="mt-4" width="800px" height="400px" elevation="0">
        <v-card-title>임시저장</v-card-title>
        <v-divider></v-divider>
        <v-card-text class="temp-post-list">
          <v-row v-for="(post, idx) in tempPosts" :key="idx">
            <v-col cols="2">{{ post.timestamp | formatDate }}</v-col>
            <v-col>
              <v-tooltip bottom>
                <template #activator="{ on, attrs }">
                  <a
                    class="black--text"
                    v-bind="attrs"
                    v-on="on"
                    @click="fetchThisPost(idx)"
                  >
                    {{ post.title }}
                  </a>
                  <a><v-icon small @click="deleteTempPost(idx)">mdi-delete</v-icon></a>
                </template>
                <span>{{ post.content | getTextOnly }}</span>
              </v-tooltip>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <div>
        <v-btn
          class="mt-6"
          outlined
          rounded
          color="error"
          @click="sheet = !sheet"
        >
          취소
        </v-btn>
        <v-btn
          class="mt-6"
          outlined
          rounded
          color="success"
          @click="save"
        >
          임시저장하기
        </v-btn>
      </div>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script>
export default {
  filters: {
    formatDate(timestamp) {
      const now = new Date();
      const date = new Date(timestamp);
      const betweenTime = Math.floor((now.getTime() - date.getTime()) / 1000 / 60);
      if (betweenTime < 1) return '방금전';
      if (betweenTime < 60) {
        return `${betweenTime}분전`;
      }
      const betweenTimeHour = Math.floor(betweenTime / 60);
      if (betweenTimeHour < 24) {
        return `${betweenTimeHour}시간전`;
      }
      const betweenTimeDay = Math.floor(betweenTime / 60 / 24);
      if (betweenTimeDay < 3) {
        return `${betweenTimeDay}일전`;
      }
      let month = '' + (date.getMonth() + 1);
      let day = '' + date.getDate();
      const year = date.getFullYear();

      if (month.length < 2) 
        month = '0' + month;
      if (day.length < 2) 
        day = '0' + day;

      return [year, month, day].join('.');
    },

    getTextOnly(html) {
      return html.replace(/<\/?[^>]+>/gi,"");
    }
  },

  props: {
    title: {
      type: String,  
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },

  data: () => ({
    sheet: false,
    tempPosts: [],
  }),

  computed: {
    getTempPosts() {
      return JSON.parse(localStorage.getItem('daelimi-temp-posts')) || [];
    },
  },

  methods: {
    fetchTempPosts() {
      this.tempPosts = this.getTempPosts;
    },

    save() {
      this.tempPosts.push({
        timestamp: Date(),
        title: this.title,
        content: this.content
      });
      localStorage.setItem('daelimi-temp-posts', JSON.stringify(this.tempPosts));
      this.sheet = false;
    },

    fetchThisPost(idx) {
      if (confirm('임시저장된 글을 불러오시겠습니까?')) {
        this.$emit('changePost', this.tempPosts[idx]);
        this.deleteTempPost(idx);
        this.sheet = false;
      }
    },

    deleteTempPost(idx) {
      this.tempPosts.splice(idx, 1);
      localStorage.setItem('daelimi-temp-posts', JSON.stringify(this.tempPosts));
    }
  }
}
</script>

<style lang="scss" scoped>
.temp-post-list {
  height: 80%;
  overflow: scroll;
}
</style>