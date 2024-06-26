"use client";

import React from "react";
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
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Tabs,
  Tab,
  AvatarGroup,
  Avatar,
  Chip,
  Tooltip,
  ScrollShadow,
  Divider,
  Breadcrumbs,
  BreadcrumbItem,
  Input,
  Badge,
  CardProps,
  Card,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeIcon} from "./social";

import NotificationsCard from "./notifications-card";
import ThemeDropdown from "./theme-dropdown";
import Antipasti from "./antipasti";
import Primtab from "./primtab";

export default function Tab2(props: CardProps) {
  return (
    <Card {...props}>
            <div  style={{ overflowX: 'auto' }}> {/* Container for tabs */}
<div>
                <div className="flex items-center justify-between px-5 pt-6">
                    <div className="flex items-center"> {/* New nested flex container */}
                        {/* <AcmeIcon size={44} /> */}
                        <span className="text-lg px-1 font-medium">Menu</span>
                    </div>
                    <ThemeDropdown />
                </div>

                <p className="px-6 pt-3 pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit qui menu et dans le consectetur adipiscing elit</p>
                <div className="overflow-x-auto w-full">
                </div>
     
        
            </div>

            <Primtab />
            </div>
        </Card>
        
  );
}
