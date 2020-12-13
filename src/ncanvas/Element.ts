type Props = Record<string, any> | null;
export default abstract class Element {
  context: CanvasRenderingContext2D | null;
  props: Props;

  constructor(ctx: CanvasRenderingContext2D) {
    this.context = ctx;
    this.props = null;
  }

  abstract render(props: Props): Element;
}
