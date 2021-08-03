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
          @click="$router.push(menu.href)"
        >
          {{ menu.title }}
        </v-btn>
      </template>

      <v-list>
          <v-list-item-group>
            <v-list-item
              v-for="(item, idx) in menu.subMenus"
              :key="idx"
              @click="$router.push(menu.href + item.href)"
            >
            <v-list-item-title>{{ item.subTitle }}</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
      </v-list>
    </v-menu>
</template>

<script>
export default {
  props: {
    menu: {
      type: Object,
      required: true
    }  
  },
}
</script>

<style>

</style>