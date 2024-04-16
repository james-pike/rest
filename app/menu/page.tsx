'use client'

import useLocationStore from "@/components/locationStore";
import React, { useEffect } from "react";


export default function MenuPage() {
  const selectedLocation = useLocationStore((state) => state.selectedLocation);

  // Define your menu content based on the selected location
  const menuContent = {
    Almonte: "This is Almonte's menu",
    Nepean: "This is Nepean's menu",
    Wellington: "This is Wellington's menu",
  };

  useEffect(() => {
    // Your menu page logic here
  }, [selectedLocation]);

  return (
    <div>
      <h1>{selectedLocation} Menu</h1>
      <p>{menuContent[selectedLocation]}</p>
    </div>
  );
}
