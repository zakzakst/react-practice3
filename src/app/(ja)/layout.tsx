import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "@/styles/globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JA",
  description: "page ja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      {/* <body className={inter.className}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
