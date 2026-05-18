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
import { jomolhari } from "@/app/fonts";
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

export function Nav({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider className="flex-col bg-[#412C95] pb-4">
            <div className="md:hidden">
                <NavbarExpanded />
            </div>
            <main className="flex-1">
                <div className="sticky top-0 z-50 flex items-center border-b-2 border-[#4B0082] bg-[#412C95] py-4 relative
                md:py-9">
                    <SidebarTrigger className='px-8 justify-center z-10
                    md:px-14' />
                    <h1 className={`${jomolhari.className} absolute left-1/2 -translate-x-1/2 w-full px-16 text-center text-2xl font-bold text-[#F5F5F5] whitespace-nowrap overflow-hidden text-ellipsis leading-[1.5]
                    md:text-5xl
                    xl:text-6xl `}>
                        Laura Gaffigan
                    </h1>
                </div>
                {children}
            </main>
        </SidebarProvider>
    )
}