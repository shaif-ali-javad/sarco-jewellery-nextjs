import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noha Gold",
  description: "gold company noha gold",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <style>{``}</style>
      </head>
      <body className={inter.className}>
        <div className="ralative w-full flex items-center justify-center">
        <Navbar/>
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
