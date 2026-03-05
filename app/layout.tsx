import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CheckinProvider } from "@/store/CheckinContext";
import { ThemeWrapper } from "@/components/ThemeWrapper";
import { StepGuard } from "@/components/StepGuard";
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen font-sans`}
      >
        <CheckinProvider>
          <ThemeWrapper>
            <StepGuard>
              {children}
            </StepGuard>
          </ThemeWrapper>
        </CheckinProvider>
      </body>
    </html>
  );
}
