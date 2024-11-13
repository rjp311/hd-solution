import type { Metadata } from "next";
import { InterFont } from "@/styles/fonts";
import "../styles/globals.scss";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "HD Solution",
  description: "A solution project for the HD Experience Developer test.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${InterFont.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
