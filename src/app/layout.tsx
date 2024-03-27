import type { Metadata } from "next";

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
