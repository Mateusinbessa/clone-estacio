import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Type } from "lucide-react";
import { Contrast } from "lucide-react";
import { Menu, X } from "lucide-react";

export const DropDownHeader = ({ onOpenChange, open }) => {
  return (
    <DropdownMenu.Root onOpenChange={onOpenChange} open={open}>
      <DropdownMenu.Trigger className="md:hidden">
        {open ? <X /> : <Menu />}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-20 bg-[#f0f5ff] p-2 rounded-md shadow-xl space-y-2 "
          align="end"
        >
          <DropdownMenu.Item className="">
            <div
              className="w-full flex gap-2 items-center py-1 px-2 rounded-lg
             hover:bg-blue-800 hover:text-white transition-colors duration-150 "
            >
              <Type />
              <span> Aumentar o texto</span>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="">
            <div
              className="w-full flex gap-2 items-center py-1 px-2 rounded-lg 
             hover:bg-blue-800 hover:text-white transition-colors duration-150 "
            >
              <Contrast />
              <span>Alto contraste</span>
            </div>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="">
            <button
              className="w-full py-1 px-2 border rounded-lg border-black
             hover:bg-blue-800 hover:text-white transition-colors duration-150 "
            >
              djlfnsdjfl
            </button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
