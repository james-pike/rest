"use client";

import type { CardProps } from "@nextui-org/react";

import React from "react";
import { Card, Tabs, Tab } from "@nextui-org/react";
import { Icon } from "@iconify/react";

import AccountDetails from "./account-details";
import NotificationsSettings from "./insalata";
import SecuritySettings from "./security-settings";
import { AcmeIcon } from "@/social";
import ThemeDropdown from "./theme-dropdown";
import Antipasti from "./antipasti";
import Beverages from "./beverages";
import Desserts from "./desserts";

export default function Tab1(props: CardProps) {
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
                        key="insalata"
                        textValue="Notification Settings"
                        title={
                            <div className="flex items-center gap-1.5">
                                <Icon icon="solar:bell-bold" width={20} />
                                <p>Insalata</p>
                            </div>
                        }
                    >
                        <NotificationsSettings className="p-2  shadow-none" />
                    </Tab>
                    <Tab
                        key="pasta"
                        textValue="Notification Settings"
                        title={
                            <div className="flex items-center gap-1.5">
                                <Icon icon="solar:bell-bold" width={20} />
                                <p>Pasta</p>
                            </div>
                        }
                    >
                        <NotificationsSettings className="p-2  shadow-none" />
                    </Tab>
                    <Tab
                        key="pinsa"
                        textValue="Notification Settings"
                        title={
                            <div className="flex items-center gap-1.5">
                                <Icon icon="solar:bell-bold" width={20} />
                                <p>Pinsa</p>
                            </div>
                        }
                    >
                        <NotificationsSettings className="p-2  shadow-none" />
                    </Tab>
                    <Tab
                        key="desserts"
                        textValue="Security Settings"
                        title={
                            <div className="flex items-center gap-1.5">
                                <Icon icon="solar:shield-keyhole-bold" width={20} />
                                <p>Desserts</p>
                            </div>
                        }
                    >
                        <Desserts className="p-2  shadow-none" />
                    </Tab>
                    <Tab
                        key="drinks"
                        textValue="Security Settings"
                        title={
                            <div className="flex items-center gap-1.5">
                                <Icon icon="solar:shield-keyhole-bold" width={20} />
                                <p>Beverages</p>
                            </div>
                        }
                    >
                        <Beverages className="p-2  shadow-none" />
                    </Tab>
                </Tabs>
                </div>
            </div>
        </Card>
    );
}
