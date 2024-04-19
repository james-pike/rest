import React from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { SlLocationPin } from "react-icons/sl";
import { PiForkKnifeFill } from "react-icons/pi";



export default function ThemeDropdown({  }) {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="h-8 bg-foreground-100 hover:bg-foreground-200 px-2">
          <div className="flex items-center gap-1 text">
            <SlLocationPin />
            <div className="md:flex text-xs">
              <p>Wellington</p>
            </div>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="almonte"
          shortcut="⌘N"
          
          startContent={<PiForkKnifeFill />}
        >
        Almonte
        </DropdownItem>
        <DropdownItem
          key="nepean"
          shortcut="⌘C"
         
          startContent={<PiForkKnifeFill />}
        >
          Nepean
        </DropdownItem>
        <DropdownItem
          key="wellington"
          shortcut="⌘⇧E"
      
          startContent={<PiForkKnifeFill />}
        >
          Welllington
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
