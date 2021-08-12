<template>
  <v-card
    class="mt-10"
  >
    <v-list>
      <v-subheader>총 {{ commentsData.length }}개의 댓글</v-subheader>
        <v-list-item v-for="comment in commentsData" :key="comment.id">
          <v-list-item-avatar>
            <v-img :src="comment.author.avatar || '/no-img.png'"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>
              <strong>{{ comment.author.username }}</strong>
              <small class="grey--text">{{ comment.created_at | formatDate }}</small>
            </v-list-item-title>
            <p>{{ comment.comment }}</p>
          </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-card class="mt-5" outlined>
      <v-card-text>
        <v-textarea
          v-model="myComment"
          outlined
          label="댓글 작성"
          ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success" @click="commentSubmit">작성</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
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
    }
  },

  props: {
    commentsData: {
      type: Array,
      required: true,
      myComment: ''
    }
  },

  data: () => ({
    
  }),

  methods: {
    async commentSubmit() {
      await this.$axios.post('/api/comments', {
        author: this.$store.state.auth.user.id,
        post: this.$route.params.id,
        comment: this.myComment
      });
      alert('작성 완료!');
      this.$router.go();
    }
  }
}
</script>