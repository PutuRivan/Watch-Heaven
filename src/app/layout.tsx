import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/utils/Navbar";
import Providers from "@/providers";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Watch Heaven",
  description: "Find TV Shows and Movies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Providers>
          <Navbar />
          {children}
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
