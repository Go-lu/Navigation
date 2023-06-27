<template>
  <div class="title2">
    Copyright © 2016-2023 <a :href="webdata.copyRightLink">{{ webdata.copyRightText }}</a> All
    rights reserved.
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Footer",
  computed: {
    ...mapState({
      webdata: (state)=>state.home.webData
    })
  }
};
</script>

<style scoped>
/*body.dark .title2 {*/
/*  color: #8d948d;*/
/*}*/

/*body.dark .title2 a {*/
/*  color: #24b1ff !important;*/
/*}*/

/*.title2 {*/
/*  position: relative;*/
/*  top: 350px;*/
/*  text-align: center;*/
/*  font-size: 10px;*/
/*}*/

/*.title2 a {*/
/*  color: #67b279;*/
/*  text-decoration: none;*/
/*}*/

/*@media screen and (max-width: 1080px) and (max-height: 1990px) {*/
/*  .title2 {*/
/*    position: relative;*/
/*    top: 300px;*/
/*    !* margin-bottom: 20px; *!*/
/*    text-align: center;*/
/*    font-size: 10px;*/
/*  }*/
/*}*/
</style>