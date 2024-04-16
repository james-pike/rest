import React, { useState, useEffect } from "react";
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import { SlLocationPin } from "react-icons/sl";

type MenuContent = {
  Almonte: string;
  Nepean: string;
  Wellington: string;
};



const menuContent: MenuContent = {
  Almonte: "Almonte menu content...",
  Nepean: "Nepean menu content...",
  Wellington: "Wellington menu content...",
};

export default function ThemeDropdown() {
  const iconClasses = "text-xl text-default-500 pointer-events-none flex-shrink-0";
  
  const [selectedLocation, setSelectedLocation] = useState(() => {
    return localStorage.getItem("selectedLocation") || "Wellington";
  });

  const handleLocationChange = (location: string) => {
    setSelectedLocation(location);
  };

  useEffect(() => {
    localStorage.setItem("selectedLocation", selectedLocation);
  }, [selectedLocation]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant="bordered" className="h-8 bg-foreground-100 hover:bg-foreground-200 px-1">
          <div className="flex items-center gap-1 text">
            <SlLocationPin />
            <div className="md:flex">
              <p>{selectedLocation}</p>
            </div>
          </div>
        </Button>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
        <DropdownItem
          key="almonte"
          shortcut="⌘N"
          onClick={() => handleLocationChange("Almonte")}
          startContent={<SlLocationPin className={iconClasses} />}
        >
          Almonte
        </DropdownItem>
        <DropdownItem
          key="nepean"
          shortcut="⌘C"
          onClick={() => handleLocationChange("Nepean")}
          startContent={<SlLocationPin className={iconClasses} />}
        >
          Nepean
        </DropdownItem>
        <DropdownItem
          key="wellington"
          shortcut="⌘⇧E"
          onClick={() => handleLocationChange("Wellington")}
          startContent={<SlLocationPin className={iconClasses} />}
        >
          Wellington
        </DropdownItem>
      </DropdownMenu>
      <div>
        <h1>{selectedLocation} Menu</h1>
        <p>{menuContent[selectedLocation]}</p>
      </div>
    </Dropdown>
  );
}
