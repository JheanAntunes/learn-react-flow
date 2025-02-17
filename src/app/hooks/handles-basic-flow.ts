import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Edge,
  OnEdgesChange,
  OnNodesChange,
  Node,
  OnConnect,
} from "@xyflow/react";
import { Dispatch, SetStateAction, useCallback } from "react";

type Props = {
  setNodes: Dispatch<SetStateAction<Node[]>>;
  setEdges: Dispatch<SetStateAction<Edge[]>>;
};
const useHandlesBasicFlow = ({ setNodes, setEdges }: Props) => {
  const onNodesChange: OnNodesChange<Node> = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [setNodes]
  );

  const onEdgesChange: OnEdgesChange<Edge> = useCallback(
    (changes) => setEdges((edges) => applyEdgeChanges(changes, edges)),
    [setEdges]
  );

  const onConnect: OnConnect = useCallback(
    (connection) => setEdges((edges) => addEdge(connection, edges)),
    [setEdges]
  );

  return {
    onNodesChange,
    onEdgesChange,
    onConnect,
  };
};

export default useHandlesBasicFlow;
