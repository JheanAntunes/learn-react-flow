import { Button } from "@/components/ui/button";
import { Squircle } from "lucide-react";
import FlowWithZustand from "./components/flow-with-zustand";
import { ModeToggle } from "./components/toggle-theme";

export default function Home() {
  return (
    <main className="w-svw h-svh">
      <menu className="fixed z-[1001] flex justify-center items-center right-0 left-0 top-5 gap-5">
        <li>
          <Button size="icon">
            <Squircle className="h-[1.2rem] w-[1.2rem]" />
            <span className="sr-only">add node</span>
          </Button>
        </li>
        <li>
          <ModeToggle />
        </li>
      </menu>
      {/* <FirstFlow /> */}
      {/* <NodeToolbarExample /> */}
      {/* <BasicFlow /> */}
      {/* <Flow /> */}
      {/* <ReactiveFlow /> */}
      <FlowWithZustand />
    </main>
  );
}
