import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBubble from "./components/ChatBubble";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cookbook",
  description: "This is a cookbook",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-background font-sans antialiased")}>
        <Navbar />
        {children}
        <ChatBubble />
        <Footer />
      </body>
    </html>
  );
}
