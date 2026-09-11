import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Doc } from "@/components/sections/Doc";
import { CallBar, Footer } from "@/components/sections/Footer";
import { terms } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of use",
  description: terms.intro,
  alternates: { canonical: "/terms" },
  openGraph: { title: "Terms of use", description: terms.intro, url: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <Doc doc={terms} />
      <Footer />
      <CallBar />
    </>
  );
}
