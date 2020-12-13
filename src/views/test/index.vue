<template>
  <div id="app">
    <VueCanvas :width="600" :height="300">
      <div width="100" height="100">这是div</div>
      <div width="200" height="100">这是div</div>
      <div width="300" height="100">这是div</div>
    </VueCanvas>
  </div>
</template>

<script lang="ts">
import VueCanvas from "@/components/VueCanvas.vue";
// import VueCanvasRect from "@/components/VueCanvasRect.vue";
import defineComponent from "@/types/defineComponent";
export default defineComponent({
  components: {
    VueCanvas
    // VueCanvasRect
  },
  data() {
    return {
      rWidth: 20,
      rHeight: 20
    };
  },
  methods: {
    draw() {
      setInterval(() => {
        this.rWidth = 200 * Math.random();
        this.rHeight = 200 * Math.random();
      }, 1000);
    }
  }
  // mounted() {
  //     // setInterval(() => {
  //     //     this.rWidth =  200 * Math.random(),
  //     //     this.rHeight =  200 * Math.random()
  //     // }, 1000)
  // }
});
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
