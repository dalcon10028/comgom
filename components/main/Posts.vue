<template>
  <v-sheet rounded="lg" outlined>
    <v-list>
      <v-subheader>최근 게시물</v-subheader>
      <v-list-item-group>
        <template v-for="(post, idx) in posts">
          <v-divider :key="idx"></v-divider>
          <v-list-item
            :key="post.id"
            nuxt
            :to="`/post/${post.id}`"
          >
            <v-list-item-content>
              <v-list-item-title>{{ post.title }}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <span class="grey--text">{{ post.created_at | formatDate }}</span>&nbsp;
              <span class="grey--text">{{ post.author.nickname }}</span>&nbsp;
              <template v-if="post.like">
                <v-icon small color="error">mdi-heart</v-icon>&nbsp;
                <span class="error--text">{{ post.like || 0 }}</span>
              </template>
            </v-list-item-icon>
          </v-list-item>
        </template>
      </v-list-item-group>
    </v-list>
  </v-sheet>
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
    posts: {
      type: Array,
      required: true,
    }
  }
}
</script>

<style>

</style>