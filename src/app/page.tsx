import Menu from "./components/controls/menu";
import FlowWithZustand from "./components/flow-with-zustand";

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
