
import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer";

const notoserifbengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর",
  description: "প্রয়োজনীয় পণ্যের দাম এক নজরে",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bn"
      data-theme="light"
      className={`${notoserifbengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F0F5F1]">
        <Header />
        <Marquee />

        <main className="flex-1">{children}</main>

        <Footer />

        <Toaster position="top-center" />
      </body>
    </html>
  );
}