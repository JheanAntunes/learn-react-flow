"use client";
import { Handle, Position } from "@xyflow/react";
import CustomNode, { CustomNodeProps } from "../custom-node";

const NodeInput = ({ data, id }: CustomNodeProps) => {
  return (
    <>
      <CustomNode data={data} id={id} />
      <Handle type="target" position={Position.Bottom} />
    </>
  );
};

export default NodeInput;
