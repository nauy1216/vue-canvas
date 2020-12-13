export default class CanvasDivElement {
  context: CanvasRenderingContext2D | null;
  props: {
    width: number;
    height: number;
  } | null;

  constructor(props) {
    this.context = null;
    this.props = props;
  }

  render(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
    const { context, props } = this;
    if (props) {
      context.strokeStyle = "#00";
      context.fillStyle = "red";
      context.lineWidth = 0.5;
      context.beginPath();
      context.rect(30.5, 30.5, props.width, props.height);
      context.stroke();
    }
  }
}
