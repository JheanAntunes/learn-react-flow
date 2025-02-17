import { Button } from "@/components/ui/button";
import FlowWithZustand from "./components/flow-with-zustand";
import { ModeToggle } from "./components/toggle-theme";

export default function Home() {
  return (
    <main className="w-svw h-svh">
      <menu className="fixed top-0">
        <li>
          <Button size="icon"></Button>
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
