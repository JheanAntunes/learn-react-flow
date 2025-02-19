"use client";
import { Handle, Position } from "@xyflow/react";
import CustomNode, { CustomNodeProps } from "../custom-node";

const NodeOutput = ({ data, id }: CustomNodeProps) => {
  return (
    <>
      <CustomNode data={data} id={id} />
      <Handle type="source" position={Position.Top} />
    </>
  );
};

export default NodeOutput;
