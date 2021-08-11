<template>
  <v-card
    color="basil"
    outlined
  >
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-default-footer
  >
  </v-data-table>
  </v-card>
</template>

<script>
export default {

  props: {
    dietData: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      headers: [
        {
          text: '코너',
          sortable: false,
          value: 'corner',
        },
        {
          text: '월요일',
          sortable: false,
          value: 'mon',
        },
        {
          text: '화요일',
          sortable: false,
          value: 'tue',
        },
        {
          text: '수요일',
          sortable: false,
          value: 'wed',
        },
        {
          text: '목요일',
          sortable: false,
          value: 'thu',
        },
        {
          text: '금요일',
          sortable: false,
          value: 'fri',
        },
      ],
      desserts: [
        {
          corner: '중식',
          mon: this.dietData.CCT11,
          tue: this.dietData.CCT21,
          wed: this.dietData.CCT31,
          thu: this.dietData.CCT41,
          fri: this.dietData.CCT51
        },
        {
          corner: '석식',
          mon: this.dietData.CCT12,
          tue: this.dietData.CCT22,
          wed: this.dietData.CCT32,
          thu: this.dietData.CCT42,
          fri: this.dietData.CCT52
        },
      ]
    }
  },
}
</script>

<style>

</style>