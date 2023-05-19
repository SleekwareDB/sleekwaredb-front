"use client";
import * as React from "react"
import Link from "next/link"

import { NavItem } from "@/types/nav"
import { publicPath, siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ComboBox } from "./combobox"
import { usePathname } from "next/navigation";

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo className="h-6 w-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      { !publicPath.includes(pathname) ? <ComboBox /> : null }
    </div>
  )
}
