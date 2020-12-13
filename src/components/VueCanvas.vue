<script lang="tsx">
import Ncanvas from "@/ncanvas/index";
export default {
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
        const children = this.$slots.default;
        console.log("children", children);
        const canvasNode = [];
        if (children) {
          children.forEach(child => {
            //
          });
        }
        Ncanvas.render(null, oC);
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
};
</script>

<style scoped lang="scss">
.vue-canvas {
  border: 2px solid red;
}
</style>
