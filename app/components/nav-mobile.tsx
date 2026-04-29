"use client"

import Link from "next/link";
import {
    SidebarProvider,
    SidebarTrigger,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarMenuItem,
    SidebarFooter,
    SidebarMenuButton
} from "@/components/ui/sidebar"
import { SearchBar } from "./search-bar";

export function NavbarExpanded() {
    return (
        <Sidebar>
            <SidebarHeader>
                <h1 className='text-xl font-bold'>Menu</h1>
                {
                    //<SearchBar />
                }
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/">
                            Home
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/pages/front-end/">
                            Frontend Devleopment
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/pages/private-voice/">
                            Private Voice Instruction
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/pages/contact/">
                            Contact Me
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>

            </SidebarContent>
            <SearchBar />
        </Sidebar>

    )
}

export function NavMobile({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider className="bg-cyan-50 py-3">
            <NavbarExpanded />
            <main>
                <SidebarTrigger className=' pb-3 ps-3' />
                {children}
            </main>
        </SidebarProvider>
    )
}