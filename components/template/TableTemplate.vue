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
            <NuxtLink :to="`/post/${item.id}`">{{ item.title }}</NuxtLink>
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
            value: 'author.username',
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

<style>

</style>