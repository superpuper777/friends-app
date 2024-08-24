import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "InTehBel text",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col xl:px-72 lg:px-48 md:px-14 xl:py-20 xs:py-0 min-h-screen bg-main-gray bg-opacity-50">
          <main className="flex-grow">{children}</main>
        </div>
      </body>
    </html>
  );
}
