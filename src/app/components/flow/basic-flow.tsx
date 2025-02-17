"use client";
import useBasicFlow from "@/app/hooks/use-basic-flow";
import { nodeTypes } from "@/app/util/initial-nodes";
import nodeColor from "@/app/util/node-color";
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowInstance,
  SelectionMode,
} from "@xyflow/react";
import { useEffect, useRef } from "react";
import { defaultEdgeOptions } from "./default-edges-options";
const panOnDrag = [1, 2];
const NODE_SIZE = 40;
const BasicFlow = () => {
  const rfInstance = useRef<ReactFlowInstance | null>(null);
  const {
    edges,
    nodes,
    onEdgesChange,
    onNodesChange,
    setNodes,
    onConnect,
    addNode,
  } = useBasicFlow();
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (rfInstance.current) {
        const viewport = rfInstance.current.toObject().viewport;
        mousePosition.current = {
          x: event.clientX + viewport.x,
          y: event.clientY + viewport.y,
        };
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "r" && rfInstance.current) {
        console.log(rfInstance.current.getViewport());
        setNodes((nds) => [
          ...nds,
          {
            id: `node-${nds.length + 1}`,
            data: { label: `Node ${nds.length + 1}` },
            position: {
              x: mousePosition.current.x - NODE_SIZE / 2,
              y: mousePosition.current.y - NODE_SIZE / 2,
            },
          },
        ]);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <>
      <button
        className="bg-blue-500 text-white p-2 rounded"
        onClick={() => {
          console.log("call");
        }}
      >
        Add new Node
      </button>
      <ReactFlow
        onNodesChange={onNodesChange} // This is a function that will be called when nodes change
        onEdgesChange={onEdgesChange} // This is a function that will be called when edges change
        onConnect={onConnect}
        nodes={nodes}
        edges={edges}
        selectionOnDrag // Enable selection on drag
        panOnScroll // Enable pan on scroll
        connectionRadius={40} // Set the connection radius
        panOnDrag={panOnDrag} // Set the pan on drag
        selectionMode={SelectionMode.Partial} // Set the selection mode
        fitView // Fit the view
        defaultEdgeOptions={defaultEdgeOptions} // Set the default edge options
        nodeTypes={nodeTypes} // Set the node types
        onInit={(instance) => {
          rfInstance.current = instance;
        }}
      >
        <Background color="#ccc" variant={BackgroundVariant.Cross} />
        <MiniMap nodeStrokeWidth={3} nodeColor={nodeColor} />
        <Controls />
      </ReactFlow>
    </>
  );
};

export default BasicFlow;
