type CanvasNode = {
  type: string;
  props: Record<string, any>;
  children: CanvasNode[];
};

export default function render(node: CanvasNode | CanvasNode[] | null, canvas: HTMLCanvasElement) {
  if (!canvas) {
    console.error("canvas dom 元素不能为空");
    return;
  }
  if (!node) {
    return;
  }
  const context = canvas.getContext("2d")!;
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}
