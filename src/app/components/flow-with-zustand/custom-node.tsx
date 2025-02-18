import { Input } from "@/components/ui/input";
import React from "react";
import CustomNodeStorage from "./customNodeStorage";

export interface CustomNodeProps {
  id: string;
  data: {
    label: string;
  };
}

const localStorageKey = "nodes";

const CustomNode: React.FC<CustomNodeProps> = ({ id, data }) => {
  return (
    <CustomNodeStorage
      id={id}
      content={data.label}
      localStorageKey={localStorageKey}
    >
      {(content, handleChange) => (
        <div className="w-full h-full relative flex  items-center justify-center">
          <Input
            className="h-10 border-none bg-transparent text-white"
            value={content}
            onChange={handleChange}
          />
        </div>
      )}
    </CustomNodeStorage>
  );
};

export default CustomNode;
