import { addEdge, applyEdgeChanges, applyNodeChanges } from "@xyflow/react";
import { create } from "zustand";

import initialEdges from "@/app/util/initial-edges";
import initialNodes from "@/app/util/initial-nodes";
import { persist } from "zustand/middleware";
import { AppNode, AppState } from "../../types/type";

// this is our useStore hook that we can use in our components to get parts of the store and call actions
const useStore = create<AppState>()(
  persist(
    (set, get) => ({
      nodes: initialNodes,
      edges: initialEdges,
      onNodesChange: (changes) => {
        set({
          nodes: applyNodeChanges(changes, get().nodes),
        });
      },
      onEdgesChange: (changes) => {
        set({
          edges: applyEdgeChanges(changes, get().edges),
        });
      },
      onConnect: (connection) => {
        set({
          edges: addEdge(connection, get().edges),
        });
      },
      setNodes: (nodes) => {
        set({ nodes });
      },
      setEdges: (edges) => {
        set({ edges });
      },
      addNode: (newNode: AppNode) => {
        get().setNodes([...get().nodes, newNode]);
      },
    }),
    {
      name: "flow-with-zustand",
    }
  )
);

export default useStore;
