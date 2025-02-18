"use client";
import { Handle, Node, NodeResizer, Position } from "@xyflow/react";
import { memo, useEffect, useState } from "react";
type LocalStorageNodes = [
  {
    id: string;
    label: string;
  }
];

const ResizableNode = ({
  data,
  id = Math.random().toString(36).substring(7),
}: Partial<Node & { data: { label: string } }>) => {
  {
    const [content, setContent] = useState<string>(
      localStorage.getItem(id) || data?.label || ""
    );
    const key = "nodes";

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = e.target.value;
      setContent(newValue);
      const existNodes = localStorage.getItem(key);
      if (existNodes) {
        const parsedNodes = JSON.parse(existNodes) as LocalStorageNodes;
        const existNodeLocalStorage = parsedNodes.find(
          (node) => node.id === id
        );
        if (existNodeLocalStorage) {
          const updatedNodes = parsedNodes.map((node) => {
            if (node.id === id) {
              return { id, label: newValue };
            }
            return node;
          });
          localStorage.setItem(key, JSON.stringify(updatedNodes));
        } else {
          parsedNodes.push({ id, label: newValue });
          localStorage.setItem(key, JSON.stringify(parsedNodes));
        }
      } else {
        localStorage.setItem(key, JSON.stringify([{ id, label: newValue }]));
      }
    };
    useEffect(() => {
      const existNodes = localStorage.getItem(key);
      if (existNodes) {
        const parsedNodes = JSON.parse(existNodes) as LocalStorageNodes;
        const existNodeLocalStorage = parsedNodes.find(
          (node) => node.id === id
        );
        if (existNodeLocalStorage) {
          setContent(existNodeLocalStorage.label);
        }
      }
    }, [id]);

    return (
      <>
        <NodeResizer minWidth={100} minHeight={100} />
        <Handle type="target" position={Position.Left} />
        <div
          onClick={() => {
            console.log("clicou no node");
          }}
          className="relative w-36 h-6"
        >
          <textarea
            className="bg-transparent border-none outline-none absolute text-xs text-center inset-0 transform flex items-center justify-center -translate-y-2"
            value={content}
            onChange={handleChange}
          />
        </div>
        <Handle type="source" position={Position.Right} />
      </>
    );
  }
};

export default memo(ResizableNode);
