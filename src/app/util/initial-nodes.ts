import { Node } from "@xyflow/react";
import CustomNode from "../components/flow-with-zustand/custom-node";
import ResizableNode from "../components/flow/NodeToolbarExample/ResizableNode";
import ResizableNodeSelected from "../components/flow/NodeToolbarExample/ResizableNodeSelected";

export const nodeTypes = {
  ResizableNode,
  ResizableNodeSelected,
  custom: CustomNode,
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
    type: "processing",
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
    type: "ResizableNode",
    data: { label: "Resizable Node" },
    position: { x: 250, y: 300 },
    style: { backgroundColor: "#f9a825", color: "white" },
  },
  {
    id: "5",
    type: "ResizableNodeSelected",
    data: { label: "Resizable Node Selected" },
    position: { x: 250, y: 400 },
    style: { backgroundColor: "#f9a825", color: "white" },
  },
  {
    id: "6",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 250, y: 500 },
    style: { backgroundColor: "#f9a825", color: "white" },
  },
];
export default initialNodes;
