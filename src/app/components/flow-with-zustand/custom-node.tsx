import { Input } from "@/components/ui/input";
import { Handle, NodeResizeControl, Position } from "@xyflow/react";
import { ArrowRightFromLine } from "lucide-react";
import React from "react";
import CustomNodeStorage from "./customNodeStorage";

interface CustomNodeProps {
  id: string;
  data: {
    label: string;
  };
}

const localStorageKey = "nodes";

const CustomNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  return (
    <>
      <NodeResizeControl
        style={{ background: "transparent", border: "none" }}
        minHeight={44}
        maxHeight={44}
        minWidth={150}
        position="bottom-right"
      >
        <ArrowRightFromLine
          className="absolute text-background dark:text-background tranform -translate-x-3.5 -translate-y-3.5"
          size={14}
        />
      </NodeResizeControl>
      <Handle type="target" position={Position.Left} />
      <CustomNodeStorage
        id={id}
        content={data.label}
        localStorageKey={localStorageKey}
      >
        {(content, handleChange) => (
          <div className="relative tranform -translate-y-1">
            <Input
              className="h-11 border-none"
              value={content}
              onChange={handleChange}
            />
          </div>
        )}
      </CustomNodeStorage>
      <Handle type="source" position={Position.Right} />
    </>
  );
};

export default CustomNode;
