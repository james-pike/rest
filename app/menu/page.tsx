'use client'


import React, { useEffect } from "react";


export default function MenuPage() {


  // Define your menu content based on the selected location
  const menuContent = {
    Almonte: "This is Almonte's menu",
    Nepean: "This is Nepean's menu",
    Wellington: "This is Wellington's menu",
  };


  return (
    <div>
      <h1> Menu</h1>
      {/* <p>{menuContent[selectedLocation]}</p> */}
    </div>
  );
}
