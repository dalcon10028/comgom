<template>
  <v-app-bar>
      <v-container>
          <v-row>
              <v-app-bar-title>
                 <v-btn text @click="$router.push('/')">
                     컴곰
                 </v-btn>
              </v-app-bar-title>
              <template v-for="(menu, idx) in menus">
                  <Menu :key="idx" :menu="menu"/>
              </template>
            <v-spacer></v-spacer>


            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn rounded color="info">
                로그인
            </v-btn>
          </v-row>
      </v-container>
    </v-app-bar>
</template>

<script>
import Menu from './Menu.vue'

export default {
  components: { Menu },

    data() {
        return {
            menus: [
                { title: '커뮤니티', href: '/community', subMenus: [
                    { subTitle: '인기게시판', href: '/hot' },
                    { subTitle: '자유게시판', href: '/free' },
                    { subTitle: '신입생게시판', href: '/freshman' },
                    { subTitle: '재학생게시판', href: '/mature' },
                    { subTitle: '졸업생게시판', href: '/graduate' },
                ] },
                { title: '동아리', subMenus: [
                    { subTitle: '커뮤니티1', href: '' },
                    { subTitle: '커뮤니티2', href: '' },
                    { subTitle: '커뮤니티3', href: '' },
                    { subTitle: '커뮤니티4', href: '' },
                ] },
                { title: '강의실', subMenus: [
                    { subTitle: '커뮤니티1', href: '' },
                    { subTitle: '커뮤니티2', href: '' },
                    { subTitle: '커뮤니티3', href: '' },
                    { subTitle: '커뮤니티4', href: '' },
                ] },
                { title: '캠퍼스', subMenus: [
                    { subTitle: '커뮤니티1', href: '' },
                    { subTitle: '커뮤니티2', href: '' },
                    { subTitle: '커뮤니티3', href: '' },
                    { subTitle: '커뮤니티4', href: '' },
                ] },
                { title: '안내', subMenus: [
                    { subTitle: '커뮤니티1', href: '' },
                    { subTitle: '커뮤니티2', href: '' },
                    { subTitle: '커뮤니티3', href: '' },
                    { subTitle: '커뮤니티4', href: '' },
                ] },
            ]
        }
    }
}
</script>

<style>

</style>