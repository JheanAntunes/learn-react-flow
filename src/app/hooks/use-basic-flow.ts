import { useState } from "react";

import initialNodes from "@/app/util/initial-nodes";
import initialEdges from "@/app/util/initial-edges";
import useHandlesBasicFlow from "./handles-basic-flow";
const useBasicFlow = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const { onConnect, onEdgesChange, onNodesChange } = useHandlesBasicFlow({
    setNodes,
    setEdges,
  });

  //ADD NEW NODE
  const addNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: Math.random() * 400, y: Math.random() * 400 },
    };
    setNodes((nds) => nds.concat(newNode));
  };
  return {
    nodes,
    edges,
    setNodes,
    setEdges,
    onConnect,
    onEdgesChange,
    onNodesChange,
    addNode,
  };
};

export default useBasicFlow;
