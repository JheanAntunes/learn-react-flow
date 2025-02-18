import { Node } from "@xyflow/react";
import NodeCustom from "../components/flow-with-zustand/nodes/node-custom";
import NodeInput from "../components/flow-with-zustand/nodes/node-input";
import NodeOutput from "../components/flow-with-zustand/nodes/node-output";
import NodeProcessing from "../components/flow-with-zustand/nodes/node-processing";

export const nodeTypes = {
  input: NodeInput,
  processing: NodeProcessing,
  output: NodeOutput,
  custom: NodeCustom,
};

const initialNodes: Node[] = [
  {
    id: "1",
    type: "input",
    data: { label: "Input Node" },
    position: { x: 100, y: 5 },
    height: 44,
    style: { backgroundColor: "#6ede87", color: "white" },
  },
  {
    id: "2",
    type: "processing",
    // you can also pass a React component as a label
    data: { label: "Another Node" },
    position: { x: 100, y: 100 },
    height: 44,
    style: { backgroundColor: "#ff0072", color: "white" },
  },
  {
    id: "3",
    type: "output",
    data: { label: "Output Node" },
    position: { x: 100, y: 200 },
    height: 44,
    style: { backgroundColor: "#6865A5", color: "white" },
  },
  {
    id: "4",
    type: "custom",
    data: { label: "Custom Node" },
    position: { x: 100, y: 300 },
    height: 44,
    style: { backgroundColor: "#f9a825", color: "white" },
  },
];
export default initialNodes;
