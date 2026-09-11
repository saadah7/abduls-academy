import type { Metadata, Viewport } from "next";
import { Schibsted_Grotesk } from "next/font/google";
import { site } from "@/content/site";
import "./globals.css";

/**
 * One family doing everything, with weight and size carrying the hierarchy.
 * This mirrors the references: arcade.software runs Inter for 15 of its
 * font-family declarations rather than pairing two faces.
 *
 * Schibsted Grotesk is variable (wght 400-900), so "too bold" is a number
 * change rather than a font swap. Only 400 to 700 is used; the system stops
 * short of the heavier weights on purpose.
 */
const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-schibsted",
  display: "swap",
});

/**
 * Absolute base for the social card and the canonical URL.
 *
 * Open Graph will not take a relative image, and a static export has no
 * request to infer a host from, so the origin has to be known at build time.
 * NEXT_PUBLIC_SITE_URL is set by the deploy workflow; locally it is unset and
 * the dev origin stands in, which keeps the tags well formed without claiming
 * the production URL on a machine that is not production.
 *
 * TODO: set NEXT_PUBLIC_SITE_URL to the real domain once Abdul has one.
 * abdulsacademy.com, which his Google listing points at, is a WordPress
 * parking page and is not his.
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3400";

const DESCRIPTION =
  "Abdul's Academy and NextGen AI Training Institute, one building in New Malakpet, Hyderabad. Tuition for Class 6 to 10, Intermediate, Diploma and Engineering, plus skills and AI courses. Separate batches for boys and girls, and three free demo classes.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  title: {
    default: "Abdul's Academy: Tuition in New Malakpet, Hyderabad",
    template: `%s | ${site.name}`,
  },
  description: DESCRIPTION,
  applicationName: site.name,
  keywords: [
    "tuition New Malakpet",
    "SSC coaching Hyderabad",
    "CBSE ICSE tuition Malakpet",
    "Intermediate MPC BiPC coaching",
    "EAMCET POLYCET ECET coaching",
    "NIOS TOSS admissions Hyderabad",
    "engineering backlog coaching OU JNTU",
  ],
  openGraph: {
    title: "Abdul's Academy, New Malakpet, Hyderabad",
    description: DESCRIPTION,
    url: "/",
    type: "website",
    locale: "en_IN",
    siteName: site.name,
    /*
      Composed from the academy's own logo plate, its own building, the hero
      headline and the Google rating, in the site's own typeface. Built by
      scratchpad/build_og.py; rerun that if the headline or the rating moves.
      1200x630 is the size every platform crops from.
    */
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Abdul's Academy, New Malakpet, Hyderabad. From Class 6 to your first job, under one roof.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul's Academy, New Malakpet, Hyderabad",
    description: DESCRIPTION,
    images: ["/og.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

/**
 * A physical tuition centre, so the page carries EducationalOrganization
 * markup. Every field below is a fact already on the page; nothing is added
 * here that is not shown to a human reader too.
 */
const SCHEMA = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: site.name,
  slogan: site.tagline,
  url: "https://www.instagram.com/abdulsacademy/",
  sameAs: [site.instagram, site.facebook],
  telephone: site.phones.map((p) => p.tel),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: "New Malakpet, Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
  availableLanguage: ["English", "Urdu", "Telugu"],
  // The same hours the Visit card shows, in the format search engines read.
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "23:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "15:30",
      closes: "23:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN">
      <body className={schibsted.variable}>
        {children}
        <script
          type="application/ld+json"
          // Static object defined above, no user input reaches this.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA) }}
        />
      </body>
    </html>
  );
}
