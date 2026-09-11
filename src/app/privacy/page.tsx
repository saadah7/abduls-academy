import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Doc } from "@/components/Doc";
import { CallBar, Footer } from "@/components/sections/Footer";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacy.intro,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy", description: privacy.intro, url: "/privacy" },
  // Without this the X card for this page shows the home page's copy.
  twitter: { title: "Privacy", description: privacy.intro },
};

export default function PrivacyPage() {
  return (
    <>
      {/* Same bypass the home page gives: six header tab stops precede the prose. */}
      <a className="skip" href="#content">
        Skip to the content
      </a>

      <Header />
      <Doc doc={privacy} />
      <Footer />
      <CallBar />
    </>
  );
}
