import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "sonner";
import Providers from "@/components/providers/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Afterdays",
  description: "Website for Afterdays Shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Providers>
            <Navbar />
            <div>{children}</div>
          </Providers>
        </main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
