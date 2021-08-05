<template>
  <v-menu
      open-on-hover
      bottom
      offset-y
    >
      <template #activator="{ on, attrs }">
        <v-btn
          text
          v-bind="attrs"
          v-on="on"
          @click="$router.push(`/${board.code}`)"
        >
          {{ board.name }}
        </v-btn>
      </template>

      <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="(menu, idx) in board.boards"
              :key="idx"
              @click="$router.push(`/${board.code}/${menu.code}`)"
            >
            <v-list-item-title>{{ menu.name }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-menu>
</template>

<script>
export default {
  props: {
    board: {
      type: Object,
      required: true
    }  
  },
}
</script>

<style>

</style>