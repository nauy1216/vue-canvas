import Element from "./Element";

type Props = {
  x: number;
  y: number;
  text: string;
} | null;
export default class CanvasTextElement extends Element {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx);
  }

  render(props: Props) {
    this.props = props;
    if (this.context && this.props) {
      this.context.textBaseline = "top";
      this.context.fillStyle = "red";
      this.context.font = "120px";
      this.context.fillText(this.props.text, this.props.x, this.props.y);
    }
    return this;
  }
}
