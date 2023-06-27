<template>
  <div class="title">{{webdata.tagTitle}}</div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Header",
  computed:{
    ...mapState({
      webdata: (state)=>state.home.webData
    })
  }
};
</script>

<style scoped>
/*body.dark .title {*/
/*  color: white;*/
/*  background-color: #17181b;*/
/*  box-shadow: var(--mainDark);*/
/*}*/

/*body.dark .title a {*/
/*  color: white;*/
/*  text-decoration: none;*/
/*}*/

/*.title {*/
/*  width: 80%;*/
/*  height: 50px;*/
/*  font-size: 30px;*/
/*  font-family: "黑体";*/
/*  text-align: center;*/
/*  line-height: 50px;*/
/*  margin: 0 auto;*/
/*  margin-top: 60px;*/
/*  margin-bottom: 20px;*/
/*  background-color: #6a9bd8;*/
/*  border-radius: 10px;*/
/*  background: #e0e0e0;*/
/*  box-shadow: var(--buttonWhite);*/
/*}*/

/*@media screen and (max-width: 1080px) and (max-height: 1990px) {*/
/*  .title {*/
/*    position: relative;*/
/*    top: 0;*/
/*    width: 80%;*/
/*    height: 50px;*/
/*    font-size: 20px;*/
/*    font-family: "黑体";*/
/*    text-align: center;*/
/*    line-height: 50px;*/
/*    margin: 0 auto;*/
/*    margin-top: 60px;*/
/*    margin-bottom: 20px;*/
/*    background-color: #6a9bd8;*/
/*    border-radius: 10px;*/
/*    background: #e0e0e0;*/
/*    box-shadow: var(--buttonWhite);*/
/*  }*/
/*}*/
</style>