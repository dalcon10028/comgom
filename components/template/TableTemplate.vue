<template>
  <section>
    <v-data-table
      :headers="headers"
      :items="posts"
      :page.sync="page"
      :items-per-page="20"
      hide-default-footer
      class="elevation-1"
      @page-count="pageCount = $event"
    >
      <template #[`item.title`]="{ item }">
        <v-btn class="no-background-hover px-0" text :ripple="false">
          <strong :class="`${item.post_label.color}--text`">[{{ item.post_label.label }}]&nbsp;</strong>
          {{ item.title }}
        </v-btn>
      </template>
      <template #[`item.created_at`]="{ item }">
        {{ item.created_at | formatDate }}
      </template>
      <template #[`item.like`]="{ item }">
        <template v-if="item.like">
          <v-icon small color="error">mdi-heart</v-icon>
          <span class="error--text">{{ `+ ${item.like}` }}</span>
        </template>
        <span v-else>0</span>
      </template>
    </v-data-table>
    <div class="text-center pt-2">
      <v-pagination
        v-model="page"
        :length="pageCount"
      ></v-pagination>
    </div>
  </section>
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
        required: true
    }
  },
  
  data () {
    return {
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,
      headers: [
        {
          text: '번호',
          sortable: false,
          value: 'id',
        },
        {
          text: '제목',
          sortable: false,
          value: 'title',
        },
        {
          text: '작성자',
          sortable: false,
          value: 'author.nickname',
        },
        {
            text: '날짜',
          sortable: false,
          value: 'created_at',
        },
        {
          text: '조회수',
          sortable: false,
          value: 'view',
        },
        
        {
          text: '좋아요',
          sortable: false,
          value: 'like',
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.no-background-hover::before {
   background-color: transparent !important;
}
</style>