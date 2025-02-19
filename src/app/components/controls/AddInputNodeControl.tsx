"use client";
import { NewNode } from "@/app/types/NewNode";
import { generateRandomPosition } from "@/app/util/generate-random-position";
import { Button } from "@/components/ui/button";
import { Squircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../flow-with-zustand/store";
const AddInputNodeControl = () => {
  const addNode = useStore((state) => state.addNode);
  const handleClick = () => {
    addNode({
      id: uuidv4(),
      type: "input",
      position: generateRandomPosition(),
      data: { label: "New Node Input" },
      height: 44,
      style: { backgroundColor: "#6ede87", color: "white" },
    } satisfies NewNode);
  };

  return (
    <Button size="icon" onClick={handleClick}>
      <Squircle className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">add node</span>
    </Button>
  );
};

export default AddInputNodeControl;
