import render from "./render";
import Element from "./Element";
import CanvasDivElement from "./Div";
import CanvasTextElement from "./Text";
import { VNode } from "vue";

const parentElements: Element[] = [];
function vueRender(context: CanvasRenderingContext2D, children: VNode[]) {
  children.forEach(child => {
    const data = child.data || {};
    const attrs = data.attrs || {};
    switch (child.tag) {
      case "div": {
        parentElements.push(
          new CanvasDivElement(context).render({
            width: Number(attrs.width),
            height: Number(attrs.width)
          })
        );
        break;
      }
      // 文本节点
      case undefined: {
        parentElements.push(
          new CanvasTextElement(context).render({
            x: 0,
            y: 0,
            text: child.text || ""
          })
        );
        break;
      }
    }
    console.log("parentElements push", parentElements);
    if (child.children) {
      vueRender(context, child.children);
    }
    parentElements.pop();
    console.log("parentElements pop", parentElements);
  });
}

export default {
  render,
  vueRender,
  CanvasDivElement,
  CanvasTextElement
};
