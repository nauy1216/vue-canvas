import Element from "./Element";
type Props = {
  width: number;
  height: number;
} | null;
export default class CanvasDivElement extends Element {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
  }

  render(props: Props) {
    this.props = props;
    if (this.context && this.props) {
      this.context.strokeStyle = "#00";
      this.context.fillStyle = "red";
      this.context.lineWidth = 1;
      this.context.beginPath();
      this.context.rect(30, 30, this.props.width, this.props.height);
      this.context.stroke();
    }
    return this;
  }
}
