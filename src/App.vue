<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<script>
// import webdata from "../public/navConfig.json";

export default {
  name: "App",
  mounted() {
    // 打开网页时派发action获取数据
    this.$store.dispatch("getData","v4")
        .then()
        .catch(error=>{
          console.log(error);
        });
  },
  beforeCreate() {
    //  派发action获取hitokoto数据
      this.$store.dispatch("getHitokotoData");
  }
};
</script>

<style>

</style>

