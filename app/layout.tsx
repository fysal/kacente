import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MainNavigation from "./components/nav/main_navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kacente technologies",
  description:
    "Revolutionizing mobile money transfer. Kacente technologies aims to provide a secure, efficient, and cost-effective solution for all your financial transaction needs. Join us in the journey towards a more connected and financially inclusive future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainNavigation />

        {children}
      </body>
    </html>
  );
}
