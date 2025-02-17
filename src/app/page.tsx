import BasicFlow from "./components/flow/basic-flow";
import Flow from "./components/flow/custom-node";
import NodeToolbarExample from "./components/flow/NodeToolbarExample";
import ReactiveFlow from "./components/multiple-edges";

export default function Home() {
  return (
    <main className="w-svw h-svh">
      {/* <FirstFlow /> */}
      {/* <NodeToolbarExample /> */}
      {/* <BasicFlow /> */}
      {/* <Flow /> */}
      <ReactiveFlow />
    </main>
  );
}
