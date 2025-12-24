import type { PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import { Geist, Geist_Mono } from "next/font/google";
import { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "docx-injection-demo",
  description: "docx-injection-demo app",
};

export default function AppLayout({ children }: PropsWithChildren) {
  return <main className={cn("app-layout", geistSans.variable, geistMono.variable)}>{children}</main>;
}
