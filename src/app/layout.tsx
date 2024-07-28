import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: {
    template: "%s | サイト名",
    default: "サイト名",
  },
};

export default function Page({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
