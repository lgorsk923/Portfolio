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
    SidebarMenuButton
} from "@/components/ui/sidebar"
import { jomolhari } from "@/app/fonts";

export function NavbarExpanded() {
    return (
        <Sidebar className="border-5 border-[#C9D8C7] rounded-br-xl
            data-[side=left]:!border-r-5 [--sidebar-mobile-width:66.666%] [--sidebar-mobile-top:4rem] [--sidebar-mobile-height:30svh] [--sidebar:#F5F5F5] [--sidebar-accent:#F5F5F5] overflow-hidden
        md:top-24 md:bottom-auto md:h-[30svh] lg:h-[35svh] xl:h-[30svh] lg:[--sidebar-width:18rem] xl:[--sidebar-width:20rem]" >
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
                            <Link href="/pages/gaffigan-voice-studio/" className='[word-spacing:-0.3em] lg:text-lg'>
                                Gaffigan Voice Studio
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild isActive>
                            <Link href="/pages/performance/" className='[word-spacing:-0.3em] lg:text-lg'>
                                Performance
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

export function Nav({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <SidebarProvider
            defaultOpen={false}
            className={`w-full flex-1 flex flex-col bg-[#412C95] pb-4 ${className || ""}`}
            style={{ display: "flex", flexDirection: "column", minHeight: "100dvh" }}>
            <div>
                <NavbarExpanded />
            </div>
            <main className="w-full flex-1 flex flex-col overflow-visible">

                {/* SINGLE STICKY CONTAINER FOR BOTH HEADERS */}
                <div className="sticky top-0 z-50 w-full bg-[#412C95]">

                    {/* Top Purple Header */}
                    <div className="flex border-b-2 border-[#4B0082] relative md:min-h-[6rem] py-6">
                        <SidebarTrigger className='lg:hidden px-8 justify-center z-10 hover:bg-transparent active:bg-transparent aria-expanded:bg-transparent focus-visible:ring-0 focus-visible:border-transparent shadow-none md:px-14' />
                        <div className='absolute inset-0 flex items-center justify-center pointer-events-none z-20 px-16'>
                            <Link href="/" className='pointer-events-auto max-w-full inline-block'>
                                <h1 className={`${jomolhari.className} text-2xl font-bold text-[#F5F5F5] whitespace-nowrap overflow-hidden text-ellipsis leading-[1.5] md:text-3xl lg:text-4xl xl:text-5xl`}>
                                    Laura Gaffigan
                                </h1>
                            </Link>
                        </div>
                    </div>

                    {/* Secondary Navigation Bar (Sits right below it natively) */}
                    <div className='hidden lg:block bg-background border-b-5 border-b-solid border-[#C9D8C7] py-2'>
                        <div className="grid grid-cols-5 gap-3">
                            <Link href='/' className="nav-button bg-primary text-white 
                            hover:text-primary hover:border-1 hover:border-solid hover:border-primary
                            active:text-primary active:border-2 active:border-solid active:border-primary"
                            >
                                Home
                            </Link>
                            <Link href='/pages/app-dev' className="nav-button bg-primary text-white 
                            hover:text-primary hover:border-1 hover:border-solid hover:border-primary
                            active:text-primary active:border-2 active:border-solid active:border-primary"
                            >
                                App Development
                            </Link>
                            <Link href='/pages/gaffigan-voice-studio' className="nav-button bg-primary text-white 
                            hover:text-primary hover:border-1 hover:border-solid hover:border-primary
                            active:text-primary active:border-2 active:border-solid active:border-primary"
                            >
                                Gaffigan Voice Studio
                            </Link>
                            <Link href='/pages/performance' className="nav-button bg-primary text-white
                            hover:text-primary hover:border-1 hover:border-solid hover:border-primary
                            active:text-primary active:border-2 active:border-solid active:border-primary"
                            >
                                Performance
                            </Link>
                            <Link href='/pages/contact' className="nav-button font-bold bg-secondary text-white hover:text-secondary hover:border-1 hover:border-solid hover:border-secondary">
                                Contact Laura
                            </Link>

                        </div>
                    </div>

                </div>
                {/* Page Content scrolls underneath */}
                {children}
            </main>
        </SidebarProvider >
    )
}