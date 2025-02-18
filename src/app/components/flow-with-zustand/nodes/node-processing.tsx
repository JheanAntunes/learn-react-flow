"use client";
import { Handle, Position } from "@xyflow/react";
import CustomNode, { CustomNodeProps } from "../custom-node";

const NodeProcessing = ({ data, id }: CustomNodeProps) => {
  return (
    <>
      <Handle type="source" position={Position.Top} />
      <CustomNode data={data} id={id} />
      <Handle type="target" position={Position.Bottom} />
    </>
  );
};

export default NodeProcessing;
