import React from "react"
import Link from "next/link"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Icons } from "./icons"
import { buttonVariants } from "./ui/button"

export default function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Icons.userCircle className="h-5 w-5 fill-current" />
        <span className="sr-only">Account</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="text-center">
          <span className="block">My Account - Budi</span>
          <span className="text-xs">Administrator</span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Team</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link href={"/"} rel="noreferrer">
            <div
              className={buttonVariants({
                size: "sm",
                variant: "ghost",
              })}
            >
              <Icons.logout className="h-4 w-4 mr-1 fill-current" />
              <span>Logout</span>
            </div>
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
