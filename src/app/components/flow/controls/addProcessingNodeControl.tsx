"use client";
import { NewNode } from "@/app/types/NewNode";
import { generateRandomPosition } from "@/app/util/generate-random-position";
import { Button } from "@/components/ui/button";
import { TextCursorInput } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
const AddProcessingNodeControl = () => {
  const addNode = useStore((state) => state.addNode);
  const handleClick = () => {
    addNode({
      id: uuidv4(),
      type: "processing",
      data: { label: "processing" },
      position: generateRandomPosition(),
      height: 44,
      style: { backgroundColor: "#ff0072", color: "white" },
    } satisfies NewNode);
    console.log("add processing node");
  };

  return (
    <Button size="icon" onClick={handleClick}>
      <TextCursorInput className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">add node</span>
    </Button>
  );
};

export default AddProcessingNodeControl;
