import {
  getNodeContentFromLocalStorage,
  updateLocalStorageNode,
} from "@/app/util/util-localstorage";
import React, { useEffect, useState } from "react";

interface CustomNodeStorageProps {
  id: string;
  content: string;
  localStorageKey: string;
  children: (
    content: string,
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  ) => React.ReactNode;
}

const CustomNodeStorage: React.FC<CustomNodeStorageProps> = ({
  id,
  content: initialContent,
  localStorageKey,
  children,
}) => {
  const [content, setContent] = useState<string>(
    getNodeContentFromLocalStorage(localStorageKey, id) || initialContent
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    setContent(newValue);
    updateLocalStorageNode(localStorageKey, id, newValue);
  };

  useEffect(() => {
    const savedContent = getNodeContentFromLocalStorage(localStorageKey, id);
    if (savedContent) {
      setContent(savedContent);
    }
  }, [id, localStorageKey]);

  return <>{children(content, handleChange)}</>;
};

export default CustomNodeStorage;
