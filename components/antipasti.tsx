"use client";

import type {CardProps} from "@nextui-org/react";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Avatar,
  Badge,
  Input,
  Autocomplete,
  AutocompleteItem,
  CardFooter,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import countries from "./countries";
import List2 from "./list2";

export default function Antipasti(props: CardProps) {
  return (
   <div>

    <List2/>
   </div>
  );
}
