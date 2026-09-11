import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Doc } from "@/components/Doc";
import { CallBar, Footer } from "@/components/sections/Footer";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of use",
  description: terms.intro,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of use", description: terms.intro, url: "/terms" },
  // Without this the X card for this page shows the home page's copy.
  twitter: { title: "Terms of use", description: terms.intro },
};

export default function TermsPage() {
  return (
    <>
      {/* Same bypass the home page gives: six header tab stops precede the prose. */}
      <a className="skip" href="#content">
        Skip to the content
      </a>

      <Header />
      <Doc doc={terms} />
      <Footer />
      <CallBar />
    </>
  );
}
