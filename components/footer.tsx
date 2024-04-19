"use client";

import type {IconProps} from "@iconify/react";

import React from "react";
import {Button, Input, Link} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeIcon} from "../social";
import ThemeSwitch from "../theme-switch";
import AboutPage from "@/app/about/page";

type SocialIconProps = Omit<IconProps, "icon">;

const footerNavigation = {
  services: [
    {name: "Branding", href: "#"},
    {name: "Data Analysis", href: "#"},
    {name: "E-commerce Solutions", href: "#"},
 
  ],
  supportOptions: [
    {name: "Pricing Plans", href: "#"},
    {name: "User Guides", href: "#"},
    {name: "Tutorials", href: "#"},
  
  ],
  aboutUs: [
    {name: "Our Story", href: "#"},
    {name: "Latest News", href: "#"},
    {name: "Career Opportunities", href: "#"},
   
  
  ],
  legal: [
    {name: "Claim", href: "#"},
    {name: "Privacy", href: "#"},
    {name: "Terms", href: "#"},
  
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:facebook" />,
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:instagram" />,
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:twitter" />,
    },
    {
      name: "GitHub",
      href: "#",
      icon: (props: SocialIconProps) => <Icon {...props} icon="fontisto:github" />,
    },
  ],
};

export default function BasicFooter() {
  const renderList = React.useCallback(
    ({title, items}: {title: string; items: {name: string; href: string}[]}) => (
      <div>
        <h3 className="text-small font-semibold text-default-600">{title}</h3>
        <ul className="mt-6 space-y-4">
          {items.map((item) => (
            <li key={item.name}>
              <Link className="text-default-400" href={item.href} size="sm">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ),
    [],
  );

  return (
    <footer className="flex w-full flex-col border-4 border-gray-900">
      <div className="mx-auto px-5 pb-8 pt-6 sm:pt-24 lg:px-8 lg:pt-32">
        
        

        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-3 md:pr-8">
            <div className="flex items-center justify-start">
              <AcmeIcon size={44} />
              {/* <img className="h-8 w-auto" src="./images/logo.png" alt="Logo" /> */}
              <span className="text-medium px-1 font-medium">Joes Italian Kitchen</span>
            </div>
            <p className="text-small text-default-500 pb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique
            </p>
            <div className="flex space-x-6">
              {footerNavigation.social.map((item) => (
                <Link key={item.name} isExternal className="text-default-400" href={item.href}>
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="w-6" />
                </Link>
              ))}
            </div>
          </div>
          {/* <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({title: "Menus", items: footerNavigation.services})}</div>
              <div className="mt-10 md:mt-0">
                {renderList({title: "About", items: footerNavigation.supportOptions})}
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>{renderList({title: "Locations", items: footerNavigation.aboutUs})}</div>
              <div className="mt-10 md:mt-0">
                {renderList({title: "Legal", items: footerNavigation.legal})}
              </div>
            </div>
          </div> */}
        </div>
{/* 
        <div className="my-10 rounded-medium bg-default-200/20 p-4 sm:my-14 sm:p-8 lg:my-16 lg:flex lg:items-center lg:justify-between lg:gap-2">
          <div>
            <h3 className="text-small font-semibold text-default-600">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-small text-default-400">
              Receive weekly updates with the newest insights, trends, and tools, straight to your
              email.
            </p>
          </div>
          <form className="mt-6 sm:flex sm:max-w-md lg:mt-0">
            <Input
              isRequired
              aria-label="Email"
              autoComplete="email"
              id="email-address"
              labelPlacement="outside"
              name="email-address"
              placeholder="name@email.com"
              startContent={<Icon className="text-default-500" icon="solar:letter-linear" />}
              type="email"
            />
            <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
              <Button color="primary" type="submit">
                Subscribe
              </Button>
            </div>
          </form>
        </div> */}

        <div className="flex flex-wrap justify-between gap-2 pt-5">
          <p className="text-small text-default-400">&copy; 2024 Acme Inc. All rights reserved.</p>
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}
