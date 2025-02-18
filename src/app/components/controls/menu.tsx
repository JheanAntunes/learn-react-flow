import { Button } from "@/components/ui/button";
import {
  MessageCircle,
  MessageCircleCode,
  TextCursorInput,
} from "lucide-react";
import { ModeToggle } from "../toggle-theme";
import AddInputNodeControl from "./AddInputNodeControl";

const Menu = () => {
  return (
    <menu className="fixed z-[1001] flex justify-center items-center right-0 left-0 top-5 gap-5">
      <AddInputNodeControl />
      <li>
        <Button size="icon">
          <TextCursorInput className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">add node</span>
        </Button>
      </li>
      <li>
        <Button size="icon">
          <MessageCircle className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">add node processing</span>
        </Button>
      </li>
      <li>
        <Button size="icon">
          <MessageCircleCode className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">add node processing</span>
        </Button>
      </li>
      <li>
        <ModeToggle />
      </li>
    </menu>
  );
};

export default Menu;
