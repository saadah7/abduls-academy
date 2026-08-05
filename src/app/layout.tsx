import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

/**
 * One family doing everything, with weight and size carrying the hierarchy.
 * This mirrors the references: arcade.software runs Inter for 15 of its
 * font-family declarations rather than pairing two faces.
 *
 * Schibsted Grotesk is variable (wght 400-900), so "too bold" is a number
 * change rather than a font swap. That mattered: Anton was rejected for being
 * too heavy and shipped only one weight.
 */
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul's Academy: Tuitions in New Malakpet, Hyderabad",
  description:
    "Tuitions for Class 6 to 10, Intermediate, Diploma and Engineering in New Malakpet, Hyderabad. SSC, CBSE and ICSE, entrance exams, spoken English and job-ready skills. Three free demo classes.",
  openGraph: {
    title: "Abdul's Academy, New Malakpet, Hyderabad",
    description:
      "Class 6 to 10, Intermediate, Diploma and Engineering, plus entrance exams, spoken English and job skills. Three free demo classes.",
    type: "website",
    locale: "en_IN",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={schibsted.variable}>{children}</body>
    </html>
  );
}
