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

export default function Tab2(props: CardProps) {
  return (
    <Card {...props}>
            <div style={{ overflowX: 'auto' }}> {/* Container for tabs */}

                <div className="flex items-center justify-between px-5 pt-6">
                    <div className="flex items-center"> {/* New nested flex container */}
                        {/* <AcmeIcon size={44} /> */}
                        <span className="text-lg px-1 font-medium">Menu</span>
                    </div>
                    <ThemeDropdown />
                </div>

                <p className="px-6 pt-3 pb-1">Lorem dsofij sdofij sdfoijsdofi sdofijsodif sodifjsodf sodifjsoidjf sdofisodijf sdoifjsdoifj</p>
                <div className="overflow-x-auto w-full">
            <Tabs
            classNames={{
                tabList: "mx-4 mt-4 text-medium flex gap-4", // Allow tabs to wrap
                tabContent: "text-small",
            }}
            size="lg"
        >

            
                <Tab
                        key="antipasti"
                        textValue="Account Settings"
                        title={
                            <div className="flex items-center gap-1.5">
                                <Icon icon="solar:user-id-bold" width={20} />
                                <p>Antipasti</p>
                            </div>
                        }
                    >
                        <Antipasti className="p-2  shadow-none" />
                    </Tab>
              <Tab
                key="deployments"
                title={
                  <div className="flex items-center gap-2">
                    <p>Deployments</p>
                    <Chip size="sm">9</Chip>
                  </div>
                }
              />


              
              <Tab key="analytics" title="Analytics" />
              <Tab key="team" title="Team" />
              <Tab key="settings" title="Settings" />
            </Tabs>
        
            </div>
            </div>
        </Card>
  );
}
