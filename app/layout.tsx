import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CheckinProvider } from "@/store/CheckinContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Most Airlines - Web Check-in",
  description: "Web Check-in for Most Airlines",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 min-h-screen font-sans`}
      >
        <main className="max-w-[900px] mx-auto min-h-screen bg-slate-50 flex flex-col items-center">
          <CheckinProvider>
            {children}
          </CheckinProvider>
        </main>
      </body>
    </html>
  );
}
