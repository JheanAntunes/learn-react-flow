"use client";
import { nodeTypes } from "@/app/util/initial-nodes";
import nodeColor from "@/app/util/node-color";
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  SelectionMode,
} from "@xyflow/react";
import { useShallow } from "zustand/react/shallow";
import { AppState } from "../../types/type";
import { defaultEdgeOptions } from "../../util/default-edges-options";
import useStore from "./store";

const selector = (state: AppState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

function FlowWithZustand() {
  const { nodes, edges, onNodesChange, onEdgesChange, onConnect } = useStore(
    useShallow(selector)
  );
  return (
    <ReactFlow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      selectionOnDrag // Enable selection on drag
      panOnScroll // Enable pan on scroll
      connectionRadius={40} // Set the connection radius
      panOnDrag={[1, 2]} // Set the pan on drag
      fitView
      selectionMode={SelectionMode.Partial} // Set the selection mode
      defaultEdgeOptions={defaultEdgeOptions}
    >
      <Background variant={BackgroundVariant.Cross} />
      <MiniMap className="dark:bg-background" nodeColor={nodeColor} />
      <Controls className="dark:text-neutral-950" />
    </ReactFlow>
  );
}

export default FlowWithZustand;
