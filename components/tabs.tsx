"use client";

import type {CardProps} from "@nextui-org/react";

import React from "react";
import {Card, Tabs, Tab} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import AccountDetails from "./account-details";
import NotificationsSettings from "./notification-settings";
import SecuritySettings from "./security-settings";

export default function Tab1(props: CardProps) {
  return (
    <html>
        <head>
               	
			<meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
    <Card {...props}>
      <Tabs
        classNames={{
          tabList: "mx-4 mt-6 text-medium",
          tabContent: "text-small",
        }}
        size="lg"
      >
        <Tab
          key="account-settings"
          textValue="Account Settings"
          title={
            <div className="flex items-center gap-1.5">
              <Icon icon="solar:user-id-bold" width={20} />
              <p>Antipasti</p>
            </div>
          }
        >
          <AccountDetails className="p-2  shadow-none" />
        </Tab>
        <Tab
          key="notifications-settings"
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
          key="notifications-settings"
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
          key="notifications-settings"
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
          key="security-settings"
          textValue="Security Settings"
          title={
            <div className="flex items-center gap-1.5">
              <Icon icon="solar:shield-keyhole-bold" width={20} />
              <p>Desserts</p>
            </div>
          }
        >
          <SecuritySettings className="p-2  shadow-none" />
        </Tab>
      </Tabs>
    </Card>
    </html>
  );
}
