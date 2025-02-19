"use client";
import { NewNode } from "@/app/types/NewNode";
import { generateRandomPosition } from "@/app/util/generate-random-position";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { v4 as uuidv4 } from "uuid";
import useStore from "../flow-with-zustand/store";
const AddOutputNodeControl = () => {
  const addNode = useStore((state) => state.addNode);
  const handleClick = () => {
    addNode({
      id: uuidv4(),
      type: "output",
      data: { label: "new Output Node" },
      position: generateRandomPosition(),
      height: 44,
      style: { backgroundColor: "#6865A5", color: "white" },
    } satisfies NewNode);
  };

  return (
    <Button size="icon" onClick={handleClick}>
      <MessageCircle className="h-[1.2rem] w-[1.2rem]" />
      <span className="sr-only">add node processing</span>
    </Button>
  );
};

export default AddOutputNodeControl;
