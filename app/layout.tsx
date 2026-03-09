// Root layout for the entire Next.js app (wraps every page)
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";
// Set up the main sans-serif font for the app
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});