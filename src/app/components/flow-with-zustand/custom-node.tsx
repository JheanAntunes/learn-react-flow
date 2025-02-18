import { Textarea } from "@/components/ui/textarea";
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
    <CustomNodeStorage
      id={id}
      content={data.label}
      localStorageKey={localStorageKey}
    >
      {(content, handleChange) => (
        <div style={{ border: "1px solid black", padding: "10px" }}>
          <Textarea value={content} onChange={handleChange} />
        </div>
      )}
    </CustomNodeStorage>
  );
};

export default CustomNode;
