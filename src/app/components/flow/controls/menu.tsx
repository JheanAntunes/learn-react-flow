import { ModeToggle } from "../../toggle-theme";

import AddCustomNodeControl from "./addCustomNodeControl";
import AddInputNodeControl from "./AddInputNodeControl";
import AddOutputNodeControl from "./addOutputNodeControl";
import AddProcessingNodeControl from "./addProcessingNodeControl";
const Menu = () => {
  return (
    <menu className="fixed z-[1001] flex justify-center items-center right-0 left-0 top-5 gap-5">
      <li>
        <AddInputNodeControl />
      </li>
      <li>
        <AddProcessingNodeControl />
      </li>
      <li>
        <AddOutputNodeControl />
      </li>
      <li>
        <AddCustomNodeControl />
      </li>
      <li>
        <ModeToggle />
      </li>
    </menu>
  );
};

export default Menu;
