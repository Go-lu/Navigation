<template>
  <div id="he-plugin-simple"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Weather",
  mounted() {
    window.WIDGET = {
      CONFIG: {
        modules: "01234",
        background: "5",
        tmpColor: "4A86E8",
        tmpSize: "16",
        cityColor: "4A86E8",
        citySize: "16",
        aqiColor: "4A86E8",
        aqiSize: "16",
        weatherIconSize: "24",
        alertIconSize: "18",
        padding: "10px 10px 10px 10px",
        shadow: "0",
        language: "auto",
        borderRadius: "15",
        fixed: "false",
        vertical: "center",
        horizontal: "center",
        key: "38147e24ee4c4e77acf40ec842ece797"
      },
    };
    const d = document;
    const c = d.createElement("link");
    c.rel = "stylesheet";
    // c.href = '../static/css/h-simple.css'
    c.href =
      "https://widget.qweather.net/simple/static/css/he-simple.css?v=1.4.0";
    const s = d.createElement("script");
    // s.src = '../static/js/h-simple.js'
    s.src = "https://widget.qweather.net/simple/static/js/he-simple.js?v=1.4.0";
    const sn = d.getElementsByTagName("script")[0];
    sn.parentNode.insertBefore(c, sn);
    sn.parentNode.insertBefore(s, sn);
  },
};
</script>

<style scoped>

</style>
