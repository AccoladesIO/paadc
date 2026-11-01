import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Chrome";
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway", weight: ["300", "400", "500", "600", "700", "800", "900"] });
export const metadata: Metadata = { title: "Prof. Ayodele Awojobi Design Competition", description: "The solution to Nigeria's problems lies with you." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" className={raleway.variable}><body><span id="top" /><Header />{children}</body></html>);
}