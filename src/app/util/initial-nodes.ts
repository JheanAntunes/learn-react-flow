import { Node } from "@xyflow/react";
import ResizableNode from "../components/flow/NodeToolbarExample/ResizableNode";
import ResizableNodeSelected from "../components/flow/NodeToolbarExample/ResizableNodeSelected";

export const nodeTypes = {
  ResizableNode,
  ResizableNodeSelected,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 250, y: 5 },
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "2",
    // you can also pass a React component as a label
    data: { label: "Another Node" },
    position: { x: 100, y: 100 },
    style: { backgroundColor: "#ff0072", color: "white" },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 250, y: 200 },
    style: { backgroundColor: "#6865A5", color: "white" },
  },
  {
    id: "4",
    data: { label: "Resizable Node" },
    position: { x: 250, y: 300 },
    style: { backgroundColor: "#6865A5", color: "white" },
  },
];
export default initialNodes;
