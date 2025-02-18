import { Node } from "@xyflow/react";

const nodeColor = (node: Node) => {
  switch (node.type) {
    case "input":
      return "#6ede87";
    case "output":
      return "#6865A5";
    case "processing":
      return "#ff0072";
    default:
      return "#f9a825";
  }
};

export default nodeColor;
