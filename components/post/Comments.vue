<template>
  <v-card
    class="mt-10"
  >
    <v-list>
      <v-subheader>총 {{ commentsData.length }}개의 댓글</v-subheader>
        <v-list-item v-for="comment in commentsData" :key="comment.id">
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ comment.author.username }}</v-list-item-title>
            {{ comment.comment }}
          </v-list-item-content>
        </v-list-item>
    </v-list>
    <v-card class="mt-5" outlined>
      <v-card-text>
        <v-textarea
          outlined
          label="댓글 작성"
          ></v-textarea>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="success">작성</v-btn>
      </v-card-actions>
    </v-card>
  </v-card>
</template>

<script>
  export default {
    props: {
      commentsData: {
        type: Array,
        required: true
      }
    },

    data: () => ({
      
    }),
  }
</script>