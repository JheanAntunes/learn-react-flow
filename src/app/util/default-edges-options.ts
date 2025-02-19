import { DefaultEdgeOptions } from "@xyflow/react";

export enum ConnectionLineType {
  Bezier = "default",
  Straight = "straight",
  Step = "step",
  SmoothStep = "smoothstep",
  SimpleBezier = "simplebezier",
}

export const defaultEdgeOptions: DefaultEdgeOptions = {
  type: ConnectionLineType.Bezier,
  animated: true,
  interactionWidth: 12,
  labelBgBorderRadius: 4,
  labelBgPadding: [8, 4],
};
