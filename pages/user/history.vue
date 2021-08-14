<template>
  <v-card outlined>
    <v-list two-line>
      <v-list-item-group
        v-model="selected"
        active-class="secondary--text"
        multiple
      >
        <template v-for="(history, index) in histories">
          <v-list-item :key="history.id" @click="clickHistory(history)">
            <v-list-item-content>
              <v-list-item-title>{{ history.type | title }}</v-list-item-title>
              <v-list-item-subtitle v-text="history.message"></v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text>{{ history.created_at | formatDate }}</v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>

          <v-divider
            v-if="index < histories.length - 1"
            :key="index"
          ></v-divider>
        </template>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import { formatDate } from "~/utils/timestamp"

export default {
  filters: {
    title(type) {
      if (type === 'point') return '포인트 변동'
    },

    formatDate
  },

  async asyncData({ $axios, store }) {
    const histories = await $axios.$get('/api/histories', {
      params: { _sort: 'id:DESC', receiver: store.getters.loggedInUser.id }
    })
    const selected = histories.map(({ checked }, idx) => ({ checked, idx }))
      .filter(({ checked }) => !checked)
      .map(({ idx }) => idx)
    return { histories, selected }
  },

  methods: {
    clickHistory({ type, target }) {
      if (type === 'point') {
        this.$router.push(`/review/read/${target}`)
      }
    }
  }
}
</script>

<style>

</style>