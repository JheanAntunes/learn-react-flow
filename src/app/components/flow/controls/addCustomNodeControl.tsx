"use client";
import { NewNode } from "@/app/types/NewNode";
import { generateRandomPosition } from "@/app/util/generate-random-position";
import { Button } from "@/components/ui/button";
import { MessageCircleCode } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../store";
const AddCustomNodeControl = () => {
  const addNode = useStore((state) => state.addNode);
  const handleClick = () => {
    addNode({
      id: uuidv4(),
      type: "custom",
      data: { label: "new Custom Node" },
      position: generateRandomPosition(),
      height: 44,
      style: { backgroundColor: "#f9a825", color: "white" },
    } satisfies NewNode);
  };
  return (
    <Button size="icon" onClick={handleClick}>
      <MessageCircleCode className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">add node processing</span>
    </Button>
  );
};

export default AddCustomNodeControl;
