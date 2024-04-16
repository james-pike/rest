import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { AddNoteIcon } from "./AddNoteIcon";
import { RiRestaurantFill } from "react-icons/ri";
import { FiChevronDown } from "react-icons/fi";

export default function ThemeDropdown() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  
  // State to manage the selected location
  const [selectedLocation, setSelectedLocation] = useState(() => {
    // Load last selected location from local storage, default to "Wellington"
    return localStorage.getItem("selectedLocation") || "Wellington";
  });

  // Function to handle selection of a different location
  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  // Save selected location to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="h-8 bg-foreground-100 hover:bg-foreground-200">
          <div className="flex items-center gap-1">
            <RiRestaurantFill />
            <div className="hidden md:flex">
              <p>· {selectedLocation}  </p>   <FiChevronDown className="mt-1 px-0.5" />
            </div>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="almonte"
          shortcut="⌘N"
          onClick={() => handleLocationChange("Almonte")}
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Almonte
        </DropdownItem>
        <DropdownItem
          key="nepean"
          shortcut="⌘C"
          onClick={() => handleLocationChange("Nepean")}
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Nepean
        </DropdownItem>
        <DropdownItem
          key="wellington"
          shortcut="⌘⇧E"
          onClick={() => handleLocationChange("Wellington")}
          startContent={<AddNoteIcon className={iconClasses} />}
        >
          Wellington
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
