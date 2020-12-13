<script lang="tsx">
import Ncanvas from "@/ncanvas/index";
import defineComponent from "@/types/defineComponent";
import { VNode } from "vue";
export default defineComponent({
  props: {
    width: {
      type: Number,
      default: 300
    },
    height: {
      type: Number,
      default: 150
    }
  },
  mounted() {
    //
  },
  methods: {
    renderCanvas() {
      this.$nextTick(() => {
        const oC = this.$refs.canvas as HTMLCanvasElement;
        const context = oC.getContext("2d")!;
        const children = this.$slots.default;
        console.log("children", children);
        if (children) {
          Ncanvas.vueRender(context, children);
        }
      });
    }
  },
  render() {
    this.renderCanvas();
    return (
      <div
        class="vue-canvas"
        style={{
          width: this.width + "px",
          height: this.height + "px"
        }}
      >
        <canvas ref="canvas" width={this.width + "px"} height={this.height + "px"}></canvas>
      </div>
    );
  }
});
</script>

<style scoped lang="scss">
.vue-canvas {
  border: 2px solid red;
}
</style>
