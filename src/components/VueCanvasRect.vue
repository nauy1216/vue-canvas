<script lang="tsx">
export default {
  name: "VueCanvasRect",
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
  methods: {
    draw(context: CanvasRenderingContext2D) {
      debugger;
      context.strokeStyle = "#00";
      context.fillStyle = "red";
      context.lineWidth = 0.5;
      context.beginPath();
      context.rect(30.5, 30.5, this.width, this.height);
      context.stroke();
    }
  },
  mounted() {
    console.log("this", this);
  },
  render() {
    return <div></div>;
  }
};
</script>
