import React from "react";
import { FloatingDock } from "./floatingdock";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    // {
    //   title: "Products",
    //   icon: (
    //     <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
    // {
    //   title: "Components",
    //   icon: (
    //     <IconNewSection className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },
   
    // {
    //   title: "Changelog",
    //   icon: (
    //     <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    //   ),
    //   href: "#",
    // },

    {
      title: "LinkedIn",
      icon: (
       <Icon className="" icon="mdi:linkedin"   style={{color: "#fff"}} />
      ),
      href: "https://www.linkedin.com/in/dhruv-khade-26779b281/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/Dhruvk2005",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full ">
      <FloatingDock
        mobileClassName="translate-y" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
