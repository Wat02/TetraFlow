import type { Metadata } from "next";
import { Fira_Sans_Extra_Condensed as FontSans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/heme-provider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/landingPage/Navbar";
import Footer from "@/components/landingPage/Footer";

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Nudge - interface design",
  description: "Digital marketing agency",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased bg-[#0A0A0A]",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
