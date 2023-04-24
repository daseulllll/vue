<template>
  <div>
    <div class="head"><Header /></div>
    <div id="app">
      <router-view />
    </div>
    <div class="foot"><Footer /></div>
  </div>
</template>

<script>
import Header from "../src/components/GNBcompo/Header.vue";
import Footer from "../src/components/GNBcompo/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss">
.head {
  text-align: center;
  width: 100%;
//   width: 2000px;
}
.foot {
  // background-color: red;
  // position: absolute;
  bottom: 0px;
  text-align: center;
  // padding-bottom: 1219px;
}
</style>
