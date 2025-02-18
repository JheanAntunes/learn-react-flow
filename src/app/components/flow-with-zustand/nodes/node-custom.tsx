"use client";
import { Handle, Position } from "@xyflow/react";
import CustomNode, { CustomNodeProps } from "../custom-node";

const NodeCustom = ({ data, id }: CustomNodeProps) => {
  return (
    <>
      <Handle type="source" position={Position.Left} />
      <CustomNode data={data} id={id} />
      <Handle type="target" position={Position.Right} />
    </>
  );
};

export default NodeCustom;
