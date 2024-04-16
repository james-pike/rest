"use client";

import type {NavbarProps} from "@nextui-org/react";
import { RiRestaurantFill } from "react-icons/ri";


import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Divider,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {cn} from "../cn";
import {AcmeIcon} from "../social";
import { ThemeButton } from "./theme-button";
import { usePathname } from "next/navigation";
import ThemeDropdown from "./theme-dropdown";
import { SlLocationPin } from "react-icons/sl";



const menuItems = [
  { name: "HOME", route: "/" },
  { name: "MENU", route: "/" },
  { name: "LOCATIONS", route: "/locations" },
  { name: "ABOUT", route: "/about" },
];

const menuContent = {
  Almonte: "This is Almonte's menu",
  Nepean: "This is Nepean's menu",
  Wellington: "This is Wellington's menu",
};

export default function BasicNavbar(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const path = usePathname();


  return (
    <Navbar
      {...props}
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
          
        }),
        wrapper: "justify-center",
        item: ["hidden md:flex",
        "flex",
        "relative",
        // "h-full",
        "items-center",
        "data-[active=true]:after:content-['']",
        "data-[active=true]:after:absolute",
        "data-[active=true]:after:bottom-0",
        "data-[active=true]:after:left-0",
        "data-[active=true]:after:right-0",
        "data-[active=true]:after:h-[2px]",
        "data-[active=true]:after:rounded-[2px]",
        "data-[active=true]:after:bg-red-700",

      ]
      }}
      className=" lg:px-10 border-y-1"
      height="60px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      isBordered
      
    >
      {/* Left Content */}
      <NavbarBrand>
      <div className="rounded-full py-0 text-background px-0">
              <img
                className="h-40 w-auto"
                src="./images/logo.png"
                alt="Logo"
              />
            </div>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
  {menuItems.map((item, index) => (
    <React.Fragment key={index}>
      <NavbarItem isActive={path === item.route}>
        <Link
          color={path === item.route ? "foreground" : "foreground"}
          className="w-full"
          href={item.route}
          size="md"
        >
          {item.name}
        </Link>
      </NavbarItem>
      {index < menuItems.length - 1 && (
        <div className="h-1 w-1 bg-white rounded-full"></div>
      )}
    </React.Fragment>
  ))}
  {/* <ThemeButton /> */}
</NavbarContent>


      {/* Right Content */}
      <NavbarContent className="hidden md:flex" justify="end">
        <NavbarItem className="ml-2 !flex gap-2">
        <ThemeDropdown 
      // Pass selectedLocation as prop
    
      />
          <Button className="text-default-500" radius="full" variant="light" href="" onClick={() => window.open("https://joesitaliankitchen-1asc.mobi2go.com")}>
            Orders
          </Button>
          <Button
  onClick={() => window.open("https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364", "_blank")}
  className="dark:bg-foreground bg-red-800 font-medium text-background"
  color="secondary"
  // endContent={<Icon icon="solar:alt-arrow-right-linear" />}
  radius="full"
  variant="flat"
>
  
  Reservations
</Button>

        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="flex md:hidden " justify="end">
        {/* {isMenuOpen && (<ThemeButton />)} */}
        {isMenuOpen && (<ThemeDropdown  />)}
           
        
      </NavbarContent>

      <NavbarMenuToggle className="text-default-400 md:hidden" />

      <NavbarMenu
        className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50"
        motionProps={{
          initial: {opacity: 0, y: -20},
          animate: {opacity: 1, y: 0},
          exit: {opacity: 0, y: -20},
          transition: {
            ease: "easeInOut",
            duration: 0.2,
          },
        }}
      >
        <NavbarMenuItem>
        <Button
  fullWidth
  as="a" // Use "a" for an anchor tag
  href="https://joesitaliankitchen-1asc.mobi2go.com"
  variant="faded"
  target="_blank" // Open link in a new tab
  rel="noopener noreferrer" // Recommended for security
>
  Orders
</Button>
          
        </NavbarMenuItem>
        <NavbarMenuItem className="mb-4">
        <Button
  fullWidth
  as="a" // Use "a" for an anchor tag
  href="https://booking.resdiary.com/widget/Standard/JoesItalianKitchen/364"
  className="bg-foreground border-foreground text-background"
  target="_blank" // Open link in a new tab
  rel="noopener noreferrer" // Recommended for security
>
  Reservations
</Button>
        </NavbarMenuItem>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="mb-2 w-full text-foreground" href={item.route} size="md">
              {item.name}
            </Link>
            {index < menuItems.length - 1 && <Divider className="opacity-50" />}
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
