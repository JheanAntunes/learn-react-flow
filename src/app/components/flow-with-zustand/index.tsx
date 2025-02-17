"use client";
import {
  Background,
  BackgroundVariant,
  Controls,
  MiniMap,
  ReactFlow,
  SelectionMode,
} from "@xyflow/react";
import { useShallow } from "zustand/react/shallow";

import nodeColor from "@/app/util/node-color";
import { defaultEdgeOptions } from "../flow/default-edges-options";
import useStore from "./store";
import { AppState } from "./type";

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
