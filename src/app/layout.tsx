import type { Metadata } from "next";
import "./globals.css";
import "@/scss/page.scss"
import Navber from "@/components/Navber";
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  subsets:['latin'],
  weight:['500']
})


export const metadata: Metadata = {
  title: "Robot Sweeper",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navber/>
        {children}
      </body>
    </html>
  );
}
