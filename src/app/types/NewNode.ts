import { NodeType } from "../util/initial-nodes";

export type NewNode = {
  id: string;
  type: NodeType;
  position: { x: number; y: number };
  data: { label: string };
};
