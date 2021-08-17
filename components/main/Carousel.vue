<template>
  <v-carousel
    v-model="model"
    cycle
    height="200"
    hide-delimiter-background
    show-arrows-on-hover
    >
    <v-carousel-item
      v-for="(banner, i) in banners"
      :key="i"
    >
      <v-sheet
        :color="banner.color"
        height="100%"
        tile
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
        <a class="banner" :href="banner.href">
          {{ banner.text }}
        </a>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    banners: [
      { color: 'primary', text: '2학기 수강신청 기간 ( 8.23 ~ 8.27 )', href: 'https://www.daelim.ac.kr/cms/FrBoardCon/BoardView.do?MENU_ID=900&CONTENTS_NO=&SITE_NO=2&BOARD_SEQ=8&BBS_SEQ=126105' },
      { color: 'secondary', text: '국가 장학금 2차 신청 일정 ( 8.17 ~ 9.16 )', href: 'https://www.daelim.ac.kr/cms/FrBoardCon/BoardView.do?MENU_ID=990&CONTENTS_NO=&SITE_NO=2&BOARD_SEQ=9&BBS_SEQ=127032' },
      { color: 'accent', text: '2학기 등록금 납부 기간 ( 8.23 ~ 8.27 )', href: 'https://www.daelim.ac.kr/cms/FrBoardCon/BoardView.do?MENU_ID=900&CONTENTS_NO=&SITE_NO=2&BOARD_SEQ=8&BBS_SEQ=126093' },
      { color: 'success', text: '첫 리뷰 작성 50포인트 ~ 8.27', href: 'https://assorted-poet-da7.notion.site/50-909ec12315ab4e37b9e1569885605283' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.banner {
  font-family: 'Noto Sans KR';
  color: aliceblue;
  font-size: x-large;
  text-decoration: none;
}
</style>