"use client"

import Link from "next/link";
import {
    SidebarProvider,
    SidebarTrigger,
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarFooter,
    SidebarMenuButton
} from "@/components/ui/sidebar"
import { jomolhari } from "@/app/fonts";
import { SearchBar } from "./search-bar";

export function NavbarExpanded() {
    return (
        <Sidebar className="border-5 border-[#C9D8C7] rounded-br-xl
        data-[side=left]:!border-r-5 [--sidebar-mobile-width:66.666%] [--sidebar-mobile-top:4rem] [--sidebar-mobile-height:25svh] [--sidebar:#F5F5F5] [--sidebar-accent:#F5F5F5] 
        md:top-24 md:bottom-auto md:h-[25svh] lg:h-[28svh] xl:h-[30svh] lg:[--sidebar-width:18rem] xl:[--sidebar-width:20rem]" >
            <SidebarHeader className='px-4 pt-2'>
                <h1 className='text-xl font-bold lg:text-2xl'>Menu</h1>
                {
                    //<SearchBar />
                }
            </SidebarHeader>
            <SidebarContent className='px-4 pb-2'>
                <SidebarMenu className='lg:gap-2 xl:gap-3'>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive>
                            <Link href="/" className="lg:text-lg">
                                Home
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive>
                            <Link href="/pages/app-dev/" className='[word-spacing:-0.3em] lg:text-lg'>
                                Application Development
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive>
                            <Link href="/pages/private-voice/" className='[word-spacing:-0.3em] lg:text-lg'>
                                Private Voice Instruction
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive>
                            <Link href="/pages/contact/" className='[word-spacing:-0.3em] lg:text-lg'>
                                Contact Me
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>

    )
}

export function Nav({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen={false} className="flex-col bg-[#412C95] pb-4">
            <div>
                <NavbarExpanded />
            </div>
            <main className="flex-1">
                <div className="sticky top-0 z-50 flex items-center border-b-2 border-[#4B0082] bg-[#412C95] py-4 relative
                md:py-9">
                    <SidebarTrigger className='px-8 justify-center z-10 hover:bg-transparent active:bg-transparent aria-expanded:bg-transparent focus-visible:ring-0 focus-visible:border-transparent shadow-none
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