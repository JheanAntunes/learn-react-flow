"use client ";
import {
  ReactFlow,
  MiniMap,
  Background,
  BackgroundVariant,
  Controls,
} from "@xyflow/react";

import ResizableNode from "@/app/components/flow/NodeToolbarExample/ResizableNode";
import ResizableNodeSelected from "@/app/components/flow/NodeToolbarExample/ResizableNodeSelected";
import CustomResizerNode from "@/app/components/flow/NodeToolbarExample/CustomResizerNode";

const nodeTypes = {
  ResizableNode,
  ResizableNodeSelected,
  CustomResizerNode,
};

const initialNodes = [
  {
    id: "1",
    type: "ResizableNode",
    data: { label: "NodeResizer" },
    position: { x: 0, y: 50 },
  },
  {
    id: "2",
    type: "ResizableNodeSelected",
    data: { label: "NodeResizer when selected" },
    position: { x: 100, y: 300 },
  },
  {
    id: "3",
    type: "CustomResizerNode",
    data: { label: "Custom Resize Icon" },
    position: { x: 150, y: 150 },
    style: {
      height: 100,
    },
  },
];

export default function NodeToolbarExample() {
  return (
    <ReactFlow
      defaultNodes={initialNodes}
      minZoom={0.2}
      maxZoom={4}
      fitView
      nodeTypes={nodeTypes}
    >
      <Background variant={BackgroundVariant.Dots} />
      <MiniMap />
      <Controls />
    </ReactFlow>
  );
}
