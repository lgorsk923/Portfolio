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
        <Sidebar >
            <SidebarHeader>
                <h1 className='text-xl font-bold'>Menu</h1>
                {
                    //<SearchBar />
                }
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/" >
                            Home
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/pages/app-dev/" className='[word-spacing:-0.3em]'>
                            Application Development
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/pages/private-voice/" className='[word-spacing:-0.3em]'>
                            Private Voice Instruction
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive>
                        <Link href="/pages/contact/" className='[word-spacing:-0.3em]'>
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
        <SidebarProvider className="bg-cyan-50 pb-4">
            <NavbarExpanded />
            <main>
                <div className="sticky top-0 z-50 flex flex-row items-stretch border-b-2 border-violet-900 bg-cyan-50 py-4">
                    <SidebarTrigger className='px-8 justify-center' />
                    <h1 className='ps-5 text-2xl flex-1 flex text-violet-900 font-bold'> Laura Gaffigan</h1>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}