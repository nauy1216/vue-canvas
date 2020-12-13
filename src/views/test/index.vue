<template>
  <div id="app">
    <VueCanvas :width="600" :height="300">
      <div>这是div</div>
    </VueCanvas>
  </div>
</template>

<script lang="ts">
import VueCanvas from "@/components/VueCanvas.vue";
// import VueCanvasRect from "@/components/VueCanvasRect.vue";

export default {
  components: {
    VueCanvas
    // VueCanvasRect
  },
  data() {
    return {
      rWidth: 20,
      rHeight: 20
    };
  }
  // mounted() {
  //     // setInterval(() => {
  //     //     this.rWidth =  200 * Math.random(),
  //     //     this.rHeight =  200 * Math.random()
  //     // }, 1000)
  // }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
