"use client";
import {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import React from "react";

const initialNodes = [
  {
    id: "1",
    type: "custom", // custom node type
    data: { label: "Node 1" },
    position: { x: 250, y: 5 },
  },
  {
    id: "2",
    type: "custom", // custom node type
    data: { label: "Node 2" },
    position: { x: 100, y: 100 },
  },
  {
    id: "3",
    type: "custom", // custom node type
    data: { label: "Node 3" },
    position: { x: 400, y: 100 },
  },
];

const initialEdges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "right", // connect to the right side
    targetHandle: "left", // connect to the left side

    animated: true,
    label: "Edge 1-2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    sourceHandle: "right", // connect to the right side
    targetHandle: "left", // connect to the left side
    label: "Edge 2-3",
  },
];

const CustomNode = ({ data }) => (
  <div style={{ padding: 10, border: "1px solid black", position: "relative" }}>
    {data.label}
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "-8px",
        width: "16px",
        height: "16px",
        backgroundColor: "#ff0072",
        borderRadius: "50%",
        transform: "translateY(-50%)",
      }}
      data-handleid="left"
      className="react-flow__handle"
    />
    <div
      style={{
        position: "absolute",
        top: "50%",
        right: "-8px",
        width: "16px",
        height: "16px",
        backgroundColor: "#ff0072",
        borderRadius: "50%",
        transform: "translateY(-50%)",
      }}
      data-handleid="right"
      className="react-flow__handle"
    />
    <div
      style={{
        position: "absolute",
        top: "-8px",
        left: "50%",
        width: "16px",
        height: "16px",
        backgroundColor: "#ff0072",
        borderRadius: "50%",
        transform: "translateX(-50%)",
      }}
      data-handleid="top"
      className="react-flow__handle"
    />
    <div
      style={{
        position: "absolute",
        bottom: "-8px",
        left: "50%",
        width: "16px",
        height: "16px",
        backgroundColor: "#ff0072",
        borderRadius: "50%",
        transform: "translateX(-50%)",
      }}
      data-handleid="bottom"
      className="react-flow__handle"
    />
  </div>
);

const nodeTypes = {
  custom: CustomNode,
};

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = (params) => setEdges((eds) => addEdge(params, eds));

  return (
    <ReactFlowProvider>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        style={{ width: "100%", height: "100%" }}
        panOnScroll
        selectionOnDrag
        fitView
        panOnDrag={[1, 2]} // Set the pan on drag
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </ReactFlowProvider>
  );
};

export default Flow;
