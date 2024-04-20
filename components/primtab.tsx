'use client';

import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import Antipasti from "./antipasti";
import List2 from "./list2";

export default function Primtab() {
  const [selected, setSelected] = React.useState("photos");

  const handleTabChange = (newSelected : any) => {
    setSelected(newSelected);
  };

  return (
    
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        selectedKey={selected}
        onSelectionChange={handleTabChange} // Pass the function here
      >
        <Tab key="photos" title="Antipasti">
          <Card>
          <List2   />
          </Card>
        </Tab>
        <Tab key="insalata" title="Insalata">
          <Card>
           <List2   />
          </Card>
        </Tab>
        <Tab key="pasta" title="Pasta">
          <Card>
          <List2   />
          </Card>
        </Tab>
        <Tab key="pinsa" title="Pinsa">
          <Card>
          <List2   />
          </Card>
        </Tab>
        <Tab key="desserts" title="Desserts">
          <Card>
          <List2   />
          </Card>
        </Tab>
        <Tab key="beverages" title="Beverages">
          <Card>
            <CardBody>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </CardBody>
          </Card>
        </Tab>
      </Tabs>
    </div>
  );
}
