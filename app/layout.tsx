import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Noto_Sans_Devanagari } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import "./globals.css";
import "./cci.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["opsz"],
});

const geist = Geist({
  variable: "--font-body",
  subsets: ["latin", "latin-ext"],
});

// Hindi fallback for both faces (subset keeps the payload small).
const devanagari = Noto_Sans_Devanagari({
  variable: "--font-deva",
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  title: {
    default: "Centre for the Creative Economy",
    template: "%s | Centre for the Creative Economy",
  },
  description:
    "A national knowledge platform for research, policy, data and practice on India's creative economy, from craft clusters to creator studios.",
};

const themeInit = `document.documentElement.classList.add("gsap")`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${bricolage.variable} ${geist.variable} ${devanagari.variable}`}>
      <body>
        <div id="cce-root" className="cci">
          <script dangerouslySetInnerHTML={{ __html: themeInit }} />
          <Loader splash />
          <a className="skip" href="#main">
            Skip to content
          </a>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
