import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { CallBar, Footer } from "@/components/sections/Footer";
import { nextgen } from "@/content/nextgen";
import { whatsappLink } from "@/content/site";
import { route } from "@/lib/asset";

/**
 * The 404. A static export writes this to out/404.html, which is the file
 * GitHub Pages serves for any path it does not have, so one component covers
 * every wrong URL.
 *
 * It offers the two things someone who mistyped a URL actually wants -- the
 * page they were looking for, and a person -- rather than a joke and a dead
 * end.
 *
 * The metadata below is not optional. Next emits its own noindex here, but the
 * root layout's `robots: { index: true, follow: true }` was being emitted right
 * after it, so the page carried two contradictory robots tags and leaned on
 * crawlers preferring the stricter one. It also inherited the layout's title.
 * Declaring both here replaces the inherited values rather than arguing with
 * them.
 */
export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};
export default function NotFound() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to the content
      </a>

      <Header />

      <main className="doc-page" id="content">
        <div className="doc-head">
          <div className="wrap">
            <p className="eyebrow">Page not found</p>
            <h1>That page is not here.</h1>
            <p className="lede">
              The link may be old, or the address mistyped. Everything about the academy is on
              one page, so it is probably one tap away.
            </p>
            <div className="ctas">
              <a className="btn btn--white" href={route("/")}>
                Go to the academy
              </a>
              <a
                className="btn btn--ghost"
                href={whatsappLink("Hello, I was looking for something on your website and could not find it.")}
              >
                Ask us on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className="doc">
            <section>
              <h2>Where you probably meant to go</h2>
              <ul className="list">
                <li>
                  <a className="link" href={route("/#programmes")}>
                    What we teach
                  </a>
                  , from Class 6 to engineering
                </li>
                <li>
                  <a className="link" href={route("/#results")}>
                    Results 2026
                  </a>
                  , every name and mark
                </li>
                <li>
                  <a className="link" href={route("/#nextgen")}>
                    {nextgen.name}
                  </a>
                  , the skills wing
                </li>
                <li>
                  <a className="link" href={route("/#visit")}>
                    Where we are
                  </a>
                  , and when we are open
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <Footer />
      <CallBar />
    </>
  );
}
