import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "روانشناسان - مشاوره آنلاین روانشناسی",
  description: "پلتفرم جامع مشاوره آنلاین روانشناسی با بهترین متخصصان ایران. خدمات مشاوره فردی، زوج‌درمانی، خانواده‌درمانی و تست‌های روانشناسی.",
  keywords: ["روانشناسی", "مشاوره", "زوج‌درمانی", "خانواده‌درمانی", "تست روانشناسی", "سلامت روان"],
  authors: [{ name: "تیم روانشناسان" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} font-vazirmatn antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
