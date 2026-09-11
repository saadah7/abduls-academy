import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Doc } from "@/components/sections/Doc";
import { CallBar, Footer } from "@/components/sections/Footer";
import { privacy } from "@/content/legal";

export const metadata: Metadata = {
  title: "Privacy",
  description: privacy.intro,
  alternates: { canonical: "/privacy" },
  openGraph: { title: "Privacy", description: privacy.intro, url: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <Doc doc={privacy} />
      <Footer />
      <CallBar />
    </>
  );
}
