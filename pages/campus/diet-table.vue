<template>
  <section>
    <v-card outlined>
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        식단표
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item>
        <Student />
      </v-tab-item>
      <v-tab-item>
        <TeachingStaff :diet-data="teachingStaffDietData" />
      </v-tab-item>
    </v-tabs-items>
  </v-card>
  </section>
</template>

<script>
import Student from "~/components/boards/diet-table/Student.vue"
import TeachingStaff from '~/components/boards/diet-table/TeachingStaff.vue'

export default {
  components: {
    Student,
    TeachingStaff
  },

  async asyncData({ $axios }) {
    // getMonday
    const d = new Date();
    const day = d.getDay();
    const diff = d.getDate() - day + (day === 0 ? -6:1);
    const mon = new Date(d.setDate(diff));
    const year = mon.getFullYear();
    const month = ("0" + (1 + mon.getMonth())).slice(-2);
    const date = ("0" + mon.getDate()).slice(-2);
    const monString = `${year}.${month}.${date}`;

    // getDietData
    const bodyFormData = new FormData();
    bodyFormData.append('BISTRO_SEQ', 2);
    bodyFormData.append('MENU_ID', 1480);
    bodyFormData.append('START_DAY', monString);
    const res = await $axios({
      method: "post",
      url: "/daelim/ajaxf/FrBistroSvc/BistroCarteInfo.do",
      data: bodyFormData,
      headers: { "Content-Type": "multipart/form-data" }
    });
    return { teachingStaffDietData: res.data.data }
  },

  data() {
    return {
      tab: null,
      items: [ '학생식당', '교직원식당'],
    }
  },
}
</script>

<style lang="scss" scoped>
.basil {
  background-color: #FFFBE6 !important;
}
.basil--text {
  color: #356859 !important;
}
</style>