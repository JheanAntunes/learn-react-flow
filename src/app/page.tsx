import FlowWithZustand from "./components/flow-with-zustand";
import Menu from "./components/flow-with-zustand/controls/menu";

export default function Home() {
  return (
    <main className="w-svw h-svh">
      <Menu />
      {/* <FirstFlow /> */}
      {/* <NodeToolbarExample /> */}
      {/* <BasicFlow /> */}
      {/* <Flow /> */}
      {/* <ReactiveFlow /> */}
      <FlowWithZustand />
    </main>
  );
}
