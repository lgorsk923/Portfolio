import "./globals.css";
import { bjCree, jomolhari } from "./fonts";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "./components/nav-mobile";
import Link from "next/link";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Laura Gaffigan",
  description: "Portfolio Website",
  icons: {
    icon: "/L.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${bjCree.variable} ${jomolhari.variable} h-full antialiased`}
    >
      <body className="min-h-screen min-h-[100dvh] flex flex-col antialiased">
        <Nav className='flex-1 flex flex-col'>
          <div className='flex-1 flex flex-col min-h-0'>
            {children}
          </div>
          <Footer />
        </Nav>
      </body>
    </html>
  );
}
