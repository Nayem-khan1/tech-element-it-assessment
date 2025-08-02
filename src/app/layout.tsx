import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "@/store/StoreProvider";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "E-Commerce Store",
  description: "A modern e-commerce store built with Next.js and Redux.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen bg-gray-50`}
      >
        <Toaster />
        <StoreProvider>
          <Navbar />
          <main className="">{children}</main>
          <div className="w-full">
            <Footer />
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
