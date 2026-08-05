import Image from "next/image";
import { site } from "@/content/site";

export function Header() {
  return (
    <header className="hdr">
      <div className="wrap mast">
        <a className="mark" href="#top">
          {/* TODO: replace with the vector logo once Abdul sends it. This is his
              real mark, recovered at 150px and upscaled, so it is slightly soft. */}
          <Image src="/logo.png" alt={`${site.name}, ${site.tagline}`} width={375} height={90} priority />
        </a>
        <nav className="nav">
          <a className="hs" href="#results">Results</a>
          <a className="hs" href="#programmes">Programmes</a>
          <a className="hs" href="#behind">Behind on your degree</a>
          {/* Both references carry a CTA in the nav. Theirs are text only. */}
          <a className="btn-sm" href="#visit">
            Contact us
          </a>
        </nav>
      </div>
    </header>
  );
}
