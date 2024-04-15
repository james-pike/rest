import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, cn} from "@nextui-org/react";
import {AddNoteIcon} from "./AddNoteIcon";
import { CiPalette  } from "react-icons/ci";
import { RiRestaurantFill } from "react-icons/ri";




// import {CopyDocumentIcon} from "./CopyDocumentIcon.jsx";
// import {EditDocumentIcon} from "./EditDocumentIcon.jsx";
// import {DeleteDocumentIcon} from "./DeleteDocumentIcon.jsx";

export default function ThemeDropdown() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <Dropdown>
      <DropdownTrigger>
<Button variant="bordered" className="h-8 bg-foreground-100 hover:bg-foreground-200">
  <div className="flex items-center gap-1">
  <RiRestaurantFill />
    {/* <div className="bg-primary"
      style={{
        width: "16px",
        height: "16px",
   
        borderRadius: "4px",
      }}
    ></div> */}
    <p>: Wellington</p>
  </div>
</Button>


      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="new"
          shortcut="⌘N"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Almonte
        </DropdownItem>
        <DropdownItem
          key="copy"
          shortcut="⌘C"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Nepean
        </DropdownItem>
        <DropdownItem
          key="edit"
          shortcut="⌘⇧E"
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Wellington
        </DropdownItem>
    
      </DropdownMenu>
    </Dropdown>
  );
}
