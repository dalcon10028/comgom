<template>
  <section>
    <v-text-field
      v-model="title"
      filled
      shaped
      height="80"
      autofocus
      placeholder="제목을 입력하세요"
    >
    </v-text-field>
    <v-sheet color="white" rounded="lg">
      <client-only>
        <Tiptap v-model="content" />
      </client-only>
    </v-sheet>
  </section>
</template>

<script>
import Tiptap from '~/components/post/Tiptap.vue'

export default {
  components: {
    Tiptap
  },

  layout: 'no-aside',

  data() {
    return {
      title: '',
      content: '<p><br>sdfasdf</p>',
    }
  },
}
</script>

<style lang="scss" scoped>
::v-deep {
  .v-text-field input {
    font-size: 2rem;
    font-weight: bold;
  }
}
</style>