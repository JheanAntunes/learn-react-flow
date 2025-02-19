import FlowWithZustand from "./components/flow";
import Menu from "./components/flow/controls/menu";

export default function Home() {
  return (
    <main className="w-svw h-svh">
      <Menu />
      <FlowWithZustand />
    </main>
  );
}
